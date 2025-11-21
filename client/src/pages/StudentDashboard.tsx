import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';

// Mock Data
const APPLICATIONS = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechVision",
        appliedDate: "Nov 18, 2025",
        status: "Submitted",
    },
    {
        id: 2,
        title: "Product Design Intern",
        company: "Creativ",
        appliedDate: "Nov 15, 2025",
        status: "Reviewed",
    },
    {
        id: 3,
        title: "Growth Marketing Intern",
        company: "ScaleUp",
        appliedDate: "Nov 10, 2025",
        status: "Rejected",
    },
    {
        id: 4,
        title: "Backend Engineer Intern",
        company: "DataFlow",
        appliedDate: "Nov 05, 2025",
        status: "Accepted",
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Submitted':
            return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        case 'Reviewed':
            return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
        case 'Accepted':
            return 'bg-green-500/10 text-green-400 border-green-500/20';
        case 'Rejected':
            return 'bg-red-500/10 text-red-400 border-red-500/20';
        default:
            return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
};

export const StudentDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#0B0B0F] relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.18),transparent_70%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] after:bg-[size:28px_28px] after:opacity-40 after:pointer-events-none">

            <div className="relative z-10 mx-auto max-w-4xl px-6 py-24">
                <div className="mb-10">
                    <h1 className="font-serif text-4xl font-medium text-white md:text-5xl">My Applications</h1>
                    <p className="mt-2 text-muted-foreground">Track the status of your internship applications.</p>
                </div>

                <div className="space-y-4">
                    {APPLICATIONS.map((app) => (
                        <div
                            key={app.id}
                            className="group flex flex-col gap-4 rounded-xl border border-white/5 bg-white/[0.04] p-5 transition-all hover:border-[#A78BFA]/30 hover:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex-1">
                                <div className="mb-1 flex items-center gap-3">
                                    <h3 className="font-sans text-lg font-semibold text-white group-hover:text-[#A78BFA] transition-colors">
                                        {app.title}
                                    </h3>
                                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(app.status)}`}>
                                        {app.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <Building2 className="h-3.5 w-3.5" />
                                        {app.company}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        Applied on {app.appliedDate}
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={() => navigate(`/internships/${app.id}`)}
                                variant="outline"
                                size="sm"
                                className="shrink-0 border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-[#A78BFA]"
                            >
                                View Details
                                <ArrowRight className="ml-2 h-3.5 w-3.5" />
                            </Button>
                        </div>
                    ))}
                </div>

                {APPLICATIONS.length === 0 && (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] py-20 text-center">
                        <p className="mb-4 text-lg text-muted-foreground">You haven't applied to any internships yet.</p>
                        <Button
                            onClick={() => navigate('/internships')}
                            className="bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] text-white hover:opacity-90 border-none"
                        >
                            Browse Internships
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
