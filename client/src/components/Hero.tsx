import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Github, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20">

      {/* Main Content Container */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">

        {/* Animated Badge */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary backdrop-blur-sm transition-colors hover:bg-primary/20 cursor-default">
            <span className="mr-2 flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
            </span>
            Best Internships for Students
          </div>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up font-serif text-5xl sm:text-7xl md:text-8xl leading-[1.1] tracking-tight text-white opacity-0" style={{ animationDelay: '0.2s' }}>
          Find your next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            breakthrough.
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up mt-8 max-w-2xl text-lg text-muted-foreground opacity-0 sm:text-xl font-light leading-relaxed" style={{ animationDelay: '0.4s' }}>
          InternHunt connects ambitious talent with world-class startups.
          No clutter, just the best opportunities curated for your growth.
        </p>

        {/* Action Buttons */}
        <div className="animate-fade-in-up mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="w-full sm:w-auto group" onClick={() => navigate("/internships")}>
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto group border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10"
            onClick={() => window.open('https://github.com/Sudharsan-T/internhunt', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            Open Source
          </Button>
        </div>

        {/* Social Proof / Trust Badge */}
        <div className="animate-fade-in mt-16 opacity-0" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-2 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-background grayscale opacity-70 hover:grayscale-0 transition-all duration-300"
                  src={`https://picsum.photos/32/32?random=${i + 10}`}
                  alt=""
                />
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-card border border-card-border ring-2 ring-background text-[10px] text-muted-foreground">
                +2k
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Trusted by 500+ fast-growing teams</p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] opacity-20 rounded-full mix-blend-screen"></div>
    </section>
  );
};