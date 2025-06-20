
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
        className="w-full pl-4 pr-10 py-3 text-lg border-2 border-border focus:border-accent transition-colors"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
        🔍
      </div>
    </div>
  );
};
