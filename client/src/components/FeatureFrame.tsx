import React from 'react';

interface FeatureFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureFrame: React.FC<FeatureFrameProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-[2.5rem] bg-[#0C0C10] ${className}`}
      style={{
        boxShadow: '0 0 25px rgba(122, 92, 255, 0.15), 0 0 60px rgba(122, 92, 255, 0.10)',
        border: '1px solid rgba(122, 92, 255, 0.15)'
      }}
    >
      {/* Radial Gradient Background - Darkened */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(70, 40, 120, 0.15) 0%, rgba(15, 15, 30, 0.95) 40%, rgba(5, 8, 20, 1) 100%)'
        }}
      />

      {/* Grid Pattern Overlay - Reduced Opacity */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};