
import React from 'react';
import { Category } from '@/types/menu';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  selectedCategory?: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  onCategorySelect, 
  selectedCategory 
}) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`glass-card cursor-pointer transition-all duration-300 group rounded-2xl border border-transparent hover:border-orchid-400/30 hover:scale-105 ${selectedCategory === category.id ? 'ring-2 ring-orchid-500 bg-white/20 dark:bg-black/30 shadow-lg shadow-orchid-500/20' : 'bg-white/5 dark:bg-black/10 hover:shadow-md hover:shadow-orchid-500/10'}`}
          onClick={() => onCategorySelect(category.id)}
        >
          <div className="p-4 text-center flex flex-col items-center justify-center h-full">
            <div className={`text-3xl mb-2 transition-transform duration-300 group-hover:scale-110 ${selectedCategory === category.id ? 'scale-110' : ''}`}>
              {category.icon}
            </div>
            <h3 className={`font-medium text-sm transition-colors duration-300 ${selectedCategory === category.id ? 'text-orchid-700 dark:text-orchid-300 font-semibold' : 'text-foreground group-hover:text-orchid-600 dark:group-hover:text-orchid-400'}`}>
              {t(`category.${category.id}`)}
            </h3>
            {selectedCategory === category.id && (
              <div className="w-8 h-1 bg-gradient-to-r from-orchid-500 to-petal-500 rounded-full mx-auto mt-2 transition-all duration-300" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
