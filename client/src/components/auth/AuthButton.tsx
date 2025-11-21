import React from 'react';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`w-full rounded-lg bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] h-12 text-sm font-bold text-white shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:shadow-[0_0_25px_rgba(167,139,250,0.5)] hover:opacity-90 transition-all duration-300 ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};