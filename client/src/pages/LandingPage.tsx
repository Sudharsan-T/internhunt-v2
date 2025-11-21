import React from 'react';
import { BackgroundGrid } from '../components/BackgroundGrid';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Showcase } from '../sections/Showcase';
import { GetStarted } from '../sections/GetStarted';
import { Features } from '../sections/Features';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <BackgroundGrid />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Showcase />
          <GetStarted />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  );
};