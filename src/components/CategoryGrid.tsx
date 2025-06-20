
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
        <Card
          key={category.id}
          className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            selectedCategory === category.id 
              ? 'ring-2 ring-accent bg-accent/10' 
              : 'hover:bg-accent/5'
          }`}
          onClick={() => onCategorySelect(category.id)}
        >
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="font-medium text-sm text-foreground">
              {t(`category.${category.id}`)}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
