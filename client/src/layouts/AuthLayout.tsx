import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full bg-[#0C0C10]">
      {/* Left Panel - Gradient & Branding */}
      <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-[#120C24] via-[#1E1538] to-[#2A1D55] p-12 lg:flex relative overflow-hidden border-r border-white/5">
        
        {/* Subtle Grid Texture */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <div className="h-3 w-3 rounded-full bg-[#A78BFA]" />
            </div>
            <span className="font-sans font-semibold text-xl tracking-wide text-white">InternHunt</span>
          </Link>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-md">
          <h1 className="font-serif text-6xl leading-none text-white tracking-tight">
            Built for modern<br />internships.
          </h1>
        </div>
      </div>

      {/* Right Panel - Form Container */}
      <div className="flex w-full flex-col items-center justify-center bg-[#0C0C10] px-6 sm:px-12 lg:w-1/2">
        
        {/* Mobile Logo (only visible on small screens) */}
        <div className="absolute top-8 left-6 lg:hidden">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <div className="h-3 w-3 rounded-full bg-[#A78BFA]" />
            </div>
            <span className="font-sans font-semibold text-xl tracking-wide text-white">InternHunt</span>
          </Link>
        </div>

        <div className="w-full max-w-[400px] py-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};