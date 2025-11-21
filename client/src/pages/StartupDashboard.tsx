import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Plus, Users, Eye } from 'lucide-react';

interface Internship {
    id: number;
    title: string;
    applicants: number;
    status: 'Open' | 'Closed';
    postedDate: string;
}

const MOCK_INTERNSHIPS: Internship[] = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        applicants: 45,
        status: "Open",
        postedDate: "2023-10-15"
    },
    {
        id: 2,
        title: "UX/UI Design Intern",
        applicants: 28,
        status: "Open",
        postedDate: "2023-10-12"
    },
    {
        id: 3,
        title: "Backend Engineering Intern",
        applicants: 12,
        status: "Closed",
        postedDate: "2023-09-28"
    }
];

export const StartupDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#0B0B0F] relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.18),transparent_70%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] after:bg-[size:28px_28px] after:opacity-40 after:pointer-events-none">
            <div className="relative z-10 mx-auto max-w-4xl px-6 py-24">

                {/* Header */}
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="font-serif text-4xl font-medium text-white">Startup Dashboard</h1>
                        <p className="mt-2 text-lg text-muted-foreground">Manage your internships and review applications.</p>
                    </div>
                    <Button
                        onClick={() => navigate('/startup/post')}
                        className="bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] text-white hover:opacity-90 border-none shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Post Internship
                    </Button>
                </div>

                {/* Internship List */}
                <div className="space-y-4">
                    {MOCK_INTERNSHIPS.map((internship) => (
                        <div
                            key={internship.id}
                            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.04] p-5 transition-all hover:bg-white/[0.06]"
                        >
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-semibold text-white">{internship.title}</h3>
                                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${internship.status === 'Open'
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}>
                                        {internship.status}
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <Users className="h-4 w-4" />
                                        {internship.applicants} Applicants
                                    </div>
                                    <span>•</span>
                                    <span>Posted on {internship.postedDate}</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                onClick={() => navigate(`/startup/internships/${internship.id}/applications`)}
                                className="border-[#A78BFA]/30 text-[#A78BFA] hover:bg-[#A78BFA]/10 hover:text-[#A78BFA]"
                            >
                                <Eye className="mr-2 h-4 w-4" />
                                View Applications
                            </Button>
                        </div>
                    ))}
                </div>

                {MOCK_INTERNSHIPS.length === 0 && (
                    <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-12 text-center">
                        <p className="text-muted-foreground">No internships posted yet.</p>
                        <Button
                            variant="link"
                            onClick={() => navigate('/startup/post')}
                            className="mt-2 text-[#A78BFA]"
                        >
                            Post your first internship
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
