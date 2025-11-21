import React from 'react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        className={`w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] disabled:opacity-50 ${className}`}
        {...props}
      />
    </div>
  );
};