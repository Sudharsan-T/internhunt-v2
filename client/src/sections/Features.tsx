import React, { useState, useRef, useEffect } from 'react';
import { FeatureSlide, Feature } from '../components/FeatureSlide';
import { PaginationDots } from '../components/PaginationDots';
import { FeatureFrame } from '../components/FeatureFrame';

const features: Feature[] = [
  {
    id: 0,
    badge: "Feature 1 of 5",
    title: "Smart Internship Applications",
    description: "Instantly apply to internships with auto-filled profiles and AI-optimized matching algorithms that highlight your best skills."
  },
  {
    id: 1,
    badge: "Feature 2 of 5",
    title: "Task Tracking Dashboard",
    description: "Track assigned internship tasks, deadlines, and progress visually — all in one centralized kanban-style dashboard."
  },
  {
    id: 2,
    badge: "Feature 3 of 5",
    title: "AI Progress Assistant",
    description: "Get daily task summaries, smart reminders, and personalized internship recommendations utilizing InternHunt AI."
  },
  {
    id: 3,
    badge: "Feature 4 of 5",
    title: "Project Workspace",
    description: "Create and manage complex internship projects with integrated file sharing, sticky notes, and deliverable tracking."
  },
  {
    id: 4,
    badge: "Feature 5 of 5",
    title: "Real-Time Chat With Startups",
    description: "Communicate directly with mentors, clarify task requirements, and collaborate instantly with a built-in secure chat system."
  }
];

export const Features: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update pagination
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const width = container.clientWidth;
    
    const newIndex = Math.round(scrollPosition / width);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < features.length) {
      setCurrentIndex(newIndex);
    }
  };

  // Handle dot click to scroll
  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const width = container.clientWidth;
    
    container.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  // Attach scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <h2 className="mb-4 font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Built for modern internships.
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground sm:text-xl">
            Everything you need to succeed, from application to offer letter.
          </p>
        </div>

        {/* Feature Frame Container */}
        <div className="relative mx-auto max-w-6xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          
          <FeatureFrame>
            {/* Scrollable Area */}
            <div 
              ref={scrollContainerRef}
              className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-20 lg:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map((feature, index) => (
                <div key={feature.id} className="min-w-full h-full">
                   <FeatureSlide feature={feature} isActive={currentIndex === index} />
                </div>
              ))}
            </div>

            {/* Pagination & Navigation Controls Area */}
            <div className="absolute bottom-6 left-0 right-0 lg:bottom-10 lg:right-12 lg:left-auto flex justify-center lg:justify-end px-8 pointer-events-none">
               <div className="pointer-events-auto">
                  <PaginationDots 
                    total={features.length} 
                    current={currentIndex} 
                    onSelect={scrollToSlide} 
                  />
               </div>
            </div>
          </FeatureFrame>
          
        </div>
      </div>
    </section>
  );
};