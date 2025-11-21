import React from 'react';
import { CircleNumber } from '../components/CircleNumber';

const steps = [
  {
    number: '01',
    title: 'Sign Up for Free',
    description: 'Create your InternHunt account in seconds — no fees, no documents required.',
  },
  {
    number: '02',
    title: 'Complete Your Internship Profile',
    description: 'Add your skills, education, and interests so startups can discover you instantly.',
  },
  {
    number: '03',
    title: 'Apply to Internships and Track Tasks',
    description: 'Apply with one click, receive tasks from startups, and manage everything from one dashboard.',
  },
];

export const GetStarted: React.FC = () => {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <h2 className="mb-6 font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Start your journey in minutes.
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground sm:text-xl">
            Join thousands of students accelerating their careers with InternHunt.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="group relative flex flex-col items-start gap-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Connector Line (Desktop only, except last item) */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-16 hidden h-[calc(100%-4rem)] w-[1px] bg-gradient-to-b from-primary/20 to-transparent md:block lg:hidden" />
              )}

              <div className="flex w-full items-center gap-4 md:flex-col md:items-start md:gap-6">
                <CircleNumber number={step.number} className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/50" />
                
                {/* Mobile Title Layout */}
                <h3 className="font-serif text-2xl text-white md:hidden">
                  {step.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {/* Desktop Title Layout */}
                <h3 className="hidden font-serif text-2xl text-white md:block">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};