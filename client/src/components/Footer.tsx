import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-background/50 backdrop-blur-lg py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row">
        <div className="flex items-center gap-2 md:flex-1 md:justify-start">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <span className="text-sm text-muted-foreground font-serif">InternHunt Inc.</span>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground md:justify-center">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>

        <div className="text-xs text-white/20 md:flex-1 md:text-right">
          © 2024. Crafted with Instrument Serif.
        </div>
      </div>
    </footer>
  );
};