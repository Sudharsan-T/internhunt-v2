import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="flex min-h-screen w-full bg-[#0C0C10]">
      {/* Left Panel - Decorative */}
      <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-[#0C0C10] via-[#1A1230] to-[#291A44] p-12 lg:flex relative overflow-hidden">
         {/* Grid Pattern Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
         
         {/* Subtle Glow */}
         <div className="absolute -right-20 -bottom-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 pointer-events-none"></div>
         
         {/* Logo */}
         <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
              </div>
              <span className="font-sans font-semibold text-xl tracking-wide text-white">InternHunt</span>
            </Link>
         </div>

         {/* Tagline */}
         <div className="relative z-10 max-w-lg">
           <h1 className="font-serif text-6xl leading-[1.1] text-white tracking-tight">
             Built for modern<br/>internships.
           </h1>
         </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex flex-1 flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-24 bg-[#0C0C10]">
        <div className="mx-auto w-full max-w-[400px] space-y-8 animate-fade-in">
           
           {/* Mobile Logo (visible only on small screens) */}
           <div className="lg:hidden mb-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
                </div>
                <span className="font-sans font-semibold text-xl tracking-wide text-white">InternHunt</span>
              </Link>
           </div>

           <div className="space-y-2 text-center lg:text-left">
             <h2 className="font-serif text-4xl text-white tracking-tight">{title}</h2>
             <p className="text-muted-foreground text-base">{subtitle}</p>
           </div>
           
           {children}
        </div>
      </div>
    </div>
  );
};