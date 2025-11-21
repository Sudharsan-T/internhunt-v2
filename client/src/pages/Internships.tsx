import React, { useState } from 'react';
import { InternshipCard } from '../components/InternshipCard';
import { SearchBar } from '../components/SearchBar';
import { FilterDropdown } from '../components/FilterDropdown';
import { BackgroundGrid } from '../components/BackgroundGrid';
import { Footer } from '../components/Footer';

// Mock Data
const INTERNSHIPS = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechVision",
        location: "Remote",
        duration: "6 Months",
        stipend: "$1000/mo",
        tags: ["React", "TypeScript", "Tailwind"],
        description: "Join our core product team to build the next generation of developer tools. You'll work directly with senior engineers on shipping real features.",
    },
    {
        id: 2,
        title: "Product Design Intern",
        company: "Creativ",
        location: "New York, NY",
        duration: "3 Months",
        stipend: "$1500/mo",
        tags: ["Figma", "UI/UX", "Design System"],
        description: "We are looking for a creative mind to help us refine our design system and craft beautiful user experiences for our mobile app.",
    },
    {
        id: 3,
        title: "Growth Marketing Intern",
        company: "ScaleUp",
        location: "Remote",
        duration: "4 Months",
        stipend: "Unpaid",
        tags: ["SEO", "Content", "Analytics"],
        description: "Learn the ins and outs of growth hacking. You will assist in content strategy, social media management, and performance analysis.",
    },
    {
        id: 4,
        title: "Backend Engineer Intern",
        company: "DataFlow",
        location: "San Francisco, CA",
        duration: "6 Months",
        stipend: "$2000/mo",
        tags: ["Python", "Django", "AWS"],
        description: "Work on high-scale data pipelines and API development. Perfect for someone who loves solving complex algorithmic challenges.",
    },
    {
        id: 5,
        title: "AI Research Intern",
        company: "NeuralNet",
        location: "Boston, MA",
        duration: "Summer",
        stipend: "$2500/mo",
        tags: ["PyTorch", "ML", "NLP"],
        description: "Collaborate with our research team on cutting-edge NLP models. Strong math background and Python skills required.",
    },
    {
        id: 6,
        title: "Full Stack Intern",
        company: "StartHub",
        location: "Remote",
        duration: "6 Months",
        stipend: "$1200/mo",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
        description: "Get full exposure to the stack. You will build features from database to frontend in a fast-paced startup environment.",
    },
];

export const Internships: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground selection:bg-primary/30">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundGrid />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col pt-24 pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
                            Find Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF]">Opportunities</span>
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Discover roles tailored to your skills, interests, and goals. Start your career with the best startups in the world.
                        </p>
                    </div>

                    {/* Search & Filters */}
                    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="w-full lg:max-w-md">
                            <SearchBar placeholder="Search by title, skill, or company..." />
                        </div>
                        <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                            <FilterDropdown label="Category" options={["Development", "Design", "Marketing", "Product", "Data"]} />
                            <FilterDropdown label="Duration" options={["1-3 Months", "3-6 Months", "6+ Months"]} />
                            <FilterDropdown label="Location" options={["Remote", "On-site", "Hybrid"]} />
                            <FilterDropdown label="Stipend" options={["Paid", "Unpaid"]} />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {INTERNSHIPS.map((internship) => (
                            <InternshipCard
                                key={internship.id}
                                id={internship.id}
                                title={internship.title}
                                company={internship.company}
                                location={internship.location}
                                duration={internship.duration}
                                stipend={internship.stipend}
                                tags={internship.tags}
                                description={internship.description}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <button
                                className="h-8 w-8 rounded-full text-sm text-muted-foreground hover:bg-white/10 hover:text-white disabled:opacity-50"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                            >
                                &lt;
                            </button>
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`h-8 w-8 rounded-full text-sm transition-all ${currentPage === page
                                        ? 'bg-[#A78BFA] text-white shadow-[0_0_10px_rgba(167,139,250,0.4)]'
                                        : 'text-muted-foreground hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                className="h-8 w-8 rounded-full text-sm text-muted-foreground hover:bg-white/10 hover:text-white"
                                onClick={() => setCurrentPage(p => p + 1)}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};
