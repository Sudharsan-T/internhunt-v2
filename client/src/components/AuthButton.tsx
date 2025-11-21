import React from 'react';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full rounded-lg bg-gradient-to-r from-[#A78BFA] to-[#7A5CFF] py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:brightness-110 hover:shadow-purple-900/40 active:scale-[0.98] disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};