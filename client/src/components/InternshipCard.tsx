import React from 'react';
import { Button } from './ui/Button';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InternshipCardProps {
    id: number;
    title: string;
    company: string;
    logo?: string;
    location: string;
    duration: string;
    stipend: string;
    tags: string[];
    description: string;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({
    id,
    title,
    company,
    logo,
    location,
    duration,
    stipend,
    tags,
    description,
}) => {
    const navigate = useNavigate();

    const handleApply = () => {
        // Mock auth check - in a real app this would come from context
        const isAuthenticated = true; // Set to true to test authenticated flow

        if (isAuthenticated) {
            navigate(`/internships/${id}/apply`);
        } else {
            navigate(`/login?redirect=/internships/${id}/apply`);
        }
    };

    return (
        <div className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#A78BFA]/30 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(167,139,250,0.05)]">
            <div>
                <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                            {logo ? (
                                <img src={logo} alt={company} className="h-8 w-8 object-contain" />
                            ) : (
                                <span className="text-xl font-bold text-white">{company.charAt(0)}</span>
                            )}
                        </div>
                        <div>
                            <h3 className="font-sans text-lg font-semibold text-white group-hover:text-[#A78BFA] transition-colors">
                                {title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{company}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/10 px-2.5 py-0.5 text-xs font-medium text-[#A78BFA]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mb-6 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {location}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {duration}
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                        <DollarSign className="h-3.5 w-3.5" />
                        {stipend}
                    </div>
                </div>

                <p className="mb-6 text-sm text-muted-foreground line-clamp-2">
                    {description}
                </p>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={() => navigate(`/internships/${id}`)}
                    className="flex-1 rounded-md bg-[#A78BFA] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#9061F9]"
                >
                    View Details
                </button>
                <Button
                    onClick={handleApply}
                    className="flex-1 bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] text-white hover:opacity-90 border-none group-hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all"
                >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};
