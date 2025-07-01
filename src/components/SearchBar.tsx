
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const { t } = useLanguage();

  return (
    <div className="relative mb-6">
      <Input
        type="text"
        placeholder={t('menu.search')}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-4 pr-10 py-3 text-lg border-2 border-leaf-200 dark:border-leaf-800 bg-white/80 dark:bg-card/80 backdrop-blur-sm focus:border-leaf-500 dark:focus:border-leaf-400 focus:ring-2 focus:ring-leaf-500/20 dark:focus:ring-leaf-400/20 transition-all duration-300 rounded-xl placeholder:text-leaf-500/70 dark:placeholder:text-leaf-400/70"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-leaf-500 dark:text-leaf-400 text-xl">
        🔍
      </div>
    </div>
  );
};
