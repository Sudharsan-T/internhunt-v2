import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { BackgroundGrid } from '../components/BackgroundGrid';
import { ArrowLeft, Upload } from 'lucide-react';
import { submitApplicationAPI } from '../api/api';

export const ApplyInternshipForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        portfolioUrl: '',
        coverLetter: '',
        expectedStipend: '',
        availableFrom: '',
    });
    const [resume, setResume] = useState<File | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await submitApplicationAPI({
                internshipId: id || '',
                fullName: formData.fullName,
                email: formData.email,
                resume: resume || undefined,
                portfolioUrl: formData.portfolioUrl || undefined,
                coverLetter: formData.coverLetter || undefined,
                expectedStipend: formData.expectedStipend || undefined,
                availableFrom: formData.availableFrom,
            });

            navigate('/application-success');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#0B0B0F] relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.18),transparent_70%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] after:bg-[size:28px_28px] after:opacity-40 after:pointer-events-none">

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
                <div className="w-full max-w-2xl">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Internships
                    </button>

                    <div className="rounded-2xl border border-white/10 bg-[#0C0C10] p-8 shadow-2xl backdrop-blur-sm">
                        <div className="mb-8 text-center">
                            <h1 className="font-serif text-3xl font-medium text-white">Apply for Internship</h1>
                            <p className="mt-2 text-muted-foreground">Fill out the details to submit your application.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Resume / CV</label>
                                <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 px-6 py-8 transition-colors hover:bg-white/10">
                                    <div className="text-center">
                                        <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                                        <div className="mt-2 flex text-sm text-muted-foreground">
                                            <label className="relative cursor-pointer rounded-md font-medium text-[#A78BFA] focus-within:outline-none hover:text-[#9070E0]">
                                                <span>Upload a file</span>
                                                <input type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">PDF up to 5MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">GitHub / Portfolio URL</label>
                                <input
                                    type="url"
                                    name="portfolioUrl"
                                    value={formData.portfolioUrl}
                                    onChange={handleInputChange}
                                    placeholder="https://github.com/username"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Cover Letter</label>
                                <textarea
                                    rows={4}
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                    placeholder="Tell us why you're a great fit..."
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Expected Stipend (Optional)</label>
                                    <input
                                        type="text"
                                        name="expectedStipend"
                                        value={formData.expectedStipend}
                                        onChange={handleInputChange}
                                        placeholder="e.g. $1000/mo"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Available From</label>
                                    <input
                                        type="date"
                                        name="availableFrom"
                                        value={formData.availableFrom}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <p className="text-sm text-red-400 text-center">{error}</p>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] py-6 text-lg font-medium text-white hover:opacity-90 border-none shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
