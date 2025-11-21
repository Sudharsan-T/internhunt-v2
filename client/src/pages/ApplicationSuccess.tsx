import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { BackgroundGrid } from '../components/BackgroundGrid';
import { CheckCircle } from 'lucide-react';

export const ApplicationSuccess: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground selection:bg-primary/30">
            <div className="fixed inset-0 z-0">
                <BackgroundGrid />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
                <div className="w-full max-w-md text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="rounded-full bg-[#A78BFA]/10 p-4 ring-1 ring-[#A78BFA]/30">
                            <CheckCircle className="h-16 w-16 text-[#A78BFA]" />
                        </div>
                    </div>

                    <h1 className="mb-4 font-serif text-4xl font-medium text-white">Application Submitted!</h1>
                    <p className="mb-8 text-lg text-muted-foreground">
                        Your application has been successfully sent. We'll notify you once the team reviews your profile.
                    </p>

                    <Button
                        onClick={() => navigate('/internships')}
                        className="w-full bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] py-6 text-lg font-medium text-white hover:opacity-90 border-none shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                    >
                        Go to Dashboard
                    </Button>
                </div>
            </div>
        </div>
    );
};
