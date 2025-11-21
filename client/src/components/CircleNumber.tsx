import React from 'react';

interface CircleNumberProps {
  number: string;
  className?: string;
}

export const CircleNumber: React.FC<CircleNumberProps> = ({ number, className = '' }) => {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-lg font-serif font-medium text-primary shadow-[0_0_15px_rgba(167,139,250,0.15)] backdrop-blur-sm ${className}`}>
      {number}
    </div>
  );
};