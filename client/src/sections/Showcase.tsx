import React from 'react';
import { GradientFrame } from '../components/GradientFrame';

export const Showcase: React.FC = () => {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            See <span className="text-[#A78BFA] italic">InternHunt</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-light leading-relaxed">
            See how students use InternHunt to apply for internships, track tasks, communicate with mentors, and stay fully organized throughout the internship.
          </p>
        </div>

        {/* Showcase Frame */}
        <div className="relative mx-auto max-w-5xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <GradientFrame className="aspect-video w-full">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black/50 flex items-center justify-center relative group cursor-pointer">
              
              {/* Placeholder Video Background/Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background opacity-50"></div>
              
              {/* Play Button Placeholder */}
              <div className="relative z-10 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="ml-1 h-0 w-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent opacity-90"></div>
              </div>

              {/* Subtle Grid Overlay inside video area */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            </div>
          </GradientFrame>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground/60 font-medium tracking-wide">
            Try InternHunt free today. No credit card required.
          </p>
        </div>

      </div>
      
      {/* Ambient Glow Effect for Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
    </section>
  );
};