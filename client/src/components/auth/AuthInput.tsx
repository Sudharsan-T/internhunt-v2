import React from 'react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <input 
        className={`flex h-12 w-full rounded-lg border border-white/10 bg-transparent px-3 py-1 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A78BFA] focus-visible:border-[#A78BFA] disabled:cursor-not-allowed disabled:opacity-50 text-foreground ${className}`}
        {...props} 
      />
    </div>
  );
};