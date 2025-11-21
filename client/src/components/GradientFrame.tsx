import React from 'react';

interface GradientFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientFrame: React.FC<GradientFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated Gradient Glow Behind */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      {/* Main Content Container */}
      <div className="relative h-full w-full rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-white/5">
        {children}
      </div>
    </div>
  );
};