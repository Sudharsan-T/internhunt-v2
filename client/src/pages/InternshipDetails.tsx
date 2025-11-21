import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, MapPin, Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

// Mock Data (In a real app, this would be fetched based on ID)
const MOCK_INTERNSHIP = {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechVision",
    location: "Remote",
    duration: "6 Months",
    stipend: "$1000/mo",
    description: "We are looking for a passionate Frontend Developer Intern to join our core product team. You will work directly with senior engineers to build the next generation of developer tools. This is a unique opportunity to ship real features that will be used by thousands of developers worldwide.",
    responsibilities: [
        "Collaborate with designers and engineers to implement new features",
        "Write clean, maintainable, and efficient code using React and TypeScript",
        "Participate in code reviews and contribute to technical discussions",
        "Optimize application performance and ensure responsiveness across devices",
        "Debug and resolve issues reported by users and QA"
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Git", "REST APIs"],
    postedAt: "2 days ago"
};

export const InternshipDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // In a real app, we would fetch data here using the id
    const internship = MOCK_INTERNSHIP;

    const handleApply = () => {
        navigate(`/internships/${id}/apply`);
    };

    return (
        <div className="min-h-screen w-full bg-[#0B0B0F] relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.18),transparent_70%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] after:bg-[size:28px_28px] after:opacity-40 after:pointer-events-none">

            <div className="relative z-10 mx-auto max-w-4xl px-6 py-24">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/internships')}
                    className="mb-8 flex items-center text-sm text-muted-foreground hover:text-white transition-colors group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Internships
                </button>

                {/* Main Content Card */}
                <div className="rounded-2xl border border-white/10 bg-[#0C0C10]/80 p-8 shadow-2xl backdrop-blur-sm md:p-12">

                    {/* Header */}
                    <div className="mb-8 border-b border-white/10 pb-8">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                <span className="text-xl font-bold text-white">{internship.company.charAt(0)}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">{internship.company}</h3>
                                <p className="text-sm text-muted-foreground">Posted {internship.postedAt}</p>
                            </div>
                        </div>

                        <h1 className="mb-6 font-serif text-4xl font-medium text-white md:text-5xl">
                            {internship.title}
                        </h1>

                        <div className="flex flex-wrap gap-4 md:gap-8">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-[#A78BFA]" />
                                <span>{internship.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-5 w-5 text-[#A78BFA]" />
                                <span>{internship.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <DollarSign className="h-5 w-5 text-[#A78BFA]" />
                                <span>{internship.stipend}</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <h2 className="mb-4 text-xl font-semibold text-white">About the Role</h2>
                        <p className="leading-relaxed text-muted-foreground">
                            {internship.description}
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-10">
                        <h2 className="mb-4 text-xl font-semibold text-white">Key Responsibilities</h2>
                        <ul className="space-y-3">
                            {internship.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#A78BFA]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills */}
                    <div className="mb-12">
                        <h2 className="mb-4 text-xl font-semibold text-white">Required Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {internship.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/10 px-4 py-1.5 text-sm font-medium text-[#A78BFA]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action */}
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">Interested in this role?</p>
                            <p className="text-white">Apply now to start your journey.</p>
                        </div>
                        <Button
                            onClick={handleApply}
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] text-white hover:opacity-90 border-none shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                        >
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};
