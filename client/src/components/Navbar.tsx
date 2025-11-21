import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [role, setRole] = useState<string | null>(localStorage.getItem("role"));

  // Update auth state when location changes (e.g., after login/logout)
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAuthPage) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-background/50 backdrop-blur-md border-b border-card-border'
      : 'bg-transparent border-b border-transparent'
      }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
            </div>
            <span className="font-sans font-semibold text-xl tracking-wide text-white">InternHunt</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              {role === 'student' ? (
                <>
                  <Link to="/internships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Find Internships
                  </Link>
                  <Link to="/dashboard/applications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    My Applications
                  </Link>
                </>
              ) : role === 'startup' ? (
                <>
                  <Link to="/startup/post" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Post Internship
                  </Link>
                  <Link to="/startup/post" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </>
              ) : null}
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('role');
                  window.location.href = '/';
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Login</Link>
              <Link to="/register">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] hover:opacity-90 border-none text-white shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};