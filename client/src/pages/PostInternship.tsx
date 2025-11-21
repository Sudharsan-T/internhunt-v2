import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const PostInternship: React.FC = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log('Form Data:', data);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            // navigate('/startup/dashboard'); // Uncomment when dashboard is ready
            alert('Internship Posted! (Check console for data)');
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full bg-[#0B0B0F] relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.18),transparent_70%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] after:bg-[size:28px_28px] after:opacity-40 after:pointer-events-none">
            <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </button>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-8 backdrop-blur-sm">
                    <div className="mb-8">
                        <h1 className="font-serif text-3xl font-medium text-white">Post an Internship</h1>
                        <p className="mt-2 text-muted-foreground">Create a new opportunity for students.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Internship Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder="e.g. Frontend Developer Intern"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Company Name</label>
                                <input
                                    name="company"
                                    type="text"
                                    placeholder="e.g. TechCorp"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Location</label>
                                <select
                                    name="locationType"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                >
                                    <option value="Remote" className="bg-[#0B0B0F]">Remote</option>
                                    <option value="Hybrid" className="bg-[#0B0B0F]">Hybrid</option>
                                    <option value="On-site" className="bg-[#0B0B0F]">On-site</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Stipend</label>
                                <input
                                    name="stipend"
                                    type="text"
                                    placeholder="e.g. $1000/mo or Unpaid"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Duration</label>
                                <input
                                    name="duration"
                                    type="text"
                                    placeholder="e.g. 3 months"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Description</label>
                            <textarea
                                name="description"
                                rows={4}
                                placeholder="Describe the role and what the intern will do..."
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                rows={4}
                                placeholder="List key responsibilities..."
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Required Skills</label>
                            <input
                                name="skills"
                                type="text"
                                placeholder="e.g. React, TypeScript, Figma (comma separated)"
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">External Apply Link</label>
                            <input
                                name="applyLink"
                                type="url"
                                placeholder="https://company.com/careers/apply"
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] py-6 text-lg font-medium text-white hover:opacity-90 border-none shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                            >
                                {isSubmitting ? 'Publishing...' : 'Publish Internship'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
