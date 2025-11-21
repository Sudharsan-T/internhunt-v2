import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
    return (
        <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
                type="text"
                className="block w-full rounded-xl border border-white/10 bg-[#0C0C10] py-3 pl-11 pr-4 text-sm text-white placeholder-muted-foreground focus:border-[#A78BFA] focus:outline-none focus:ring-1 focus:ring-[#A78BFA] transition-all"
                placeholder={placeholder}
                onChange={(e) => onSearch && onSearch(e.target.value)}
            />
        </div>
    );
};
