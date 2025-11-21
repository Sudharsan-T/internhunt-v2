import React from 'react';

interface PaginationDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
  className?: string;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({ 
  total, 
  current, 
  onSelect,
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`group relative flex h-2 items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
            current === index ? 'w-8' : 'w-2 hover:w-4'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        >
          <span 
            className={`absolute block h-2 rounded-full transition-colors duration-300 ${
              current === index 
                ? 'w-full bg-primary shadow-[0_0_10px_rgba(167,139,250,0.4)]' 
                : 'w-2 bg-white/20 group-hover:bg-white/40'
            }`} 
          />
        </button>
      ))}
    </div>
  );
};