import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
    label: string;
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
    return (
        <div className="relative min-w-[160px]">
            <select
                className="w-full appearance-none rounded-xl border border-white/10 bg-[#0C0C10] py-3 pl-4 pr-10 text-sm text-white focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA] transition-all cursor-pointer hover:border-white/20"
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
            >
                <option value="" disabled selected>{label}</option>
                {options.map((option) => (
                    <option key={option} value={option} className="bg-[#0C0C10] text-white">
                        {option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
        </div>
    );
};
