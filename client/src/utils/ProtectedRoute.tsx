import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { verifyTokenAPI } from '../api/api';

interface ProtectedRouteProps {
    allowedRoles?: ('student' | 'startup')[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role') as 'student' | 'startup' | null;
    const location = useLocation();
    const [isVerifying, setIsVerifying] = useState(true);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setIsVerifying(false);
                return;
            }

            try {
                await verifyTokenAPI();
                setIsValid(true);
            } catch (error) {
                // Token is invalid, clear localStorage
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                setIsValid(false);
            } finally {
                setIsVerifying(false);
            }
        };

        verifyToken();
    }, [token]);

    // Show loading state while verifying
    if (isVerifying) {
        return (
            <div className="min-h-screen w-full bg-[#0B0B0F] flex items-center justify-center">
                <div className="text-white">Verifying...</div>
            </div>
        );
    }

    if (!token || !isValid) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && role && !allowedRoles.includes(role)) {
        // Redirect based on role if trying to access unauthorized route
        if (role === 'student') {
            return <Navigate to="/dashboard/applications" replace />;
        } else if (role === 'startup') {
            return <Navigate to="/startup/post" replace />;
        } else {
            return <Navigate to="/" replace />;
        }
    }

    return <Outlet />;
};
