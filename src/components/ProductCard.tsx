
import React from 'react';
import { Product } from '@/types/menu';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { t } = useLanguage();

  return (
    <Card 
      className="h-full flex flex-col group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orchid-500/20 border-border/50 hover:border-orchid-400 bg-gradient-to-br from-white via-orchid-50/30 to-petal-50/20 dark:from-card dark:via-orchid-950/30 dark:to-petal-950/20 backdrop-blur-sm"
      onClick={onClick}
    >
      <CardContent className="p-0 flex flex-col flex-grow">
        {product.image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {product.discount && (
              <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground shadow-lg">
                {product.discount.label}
              </Badge>
            )}
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orchid-600 to-primary-600 text-white text-xs shadow-lg backdrop-blur-sm">
              {t(`category.${product.category}`)}
            </Badge>
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        )}
        
        <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-card to-orchid-50/20 dark:to-orchid-950/20">
          <h3 className="font-playfair font-semibold text-lg mb-2 text-foreground group-hover:text-orchid-700 dark:group-hover:text-orchid-300 transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-lg font-bold bg-gradient-to-r from-orchid-600 to-primary-600 bg-clip-text text-transparent group-hover:from-orchid-700 group-hover:to-primary-700 transition-all duration-300">
                {product.price} {t('price.currency')}
              </span>
              
              {product.hasVariant && product.variantName && (
                <div className="text-sm text-muted-foreground">
                  <span className="capitalize">{t('product.with')} {product.variantName}: </span>
                  <span className="font-semibold text-petal-600 dark:text-petal-400">
                    {product.variantPrice} {t('price.currency')}
                  </span>
                </div>
              )}
            </div>
            {/* Visual indicator for interaction */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-orchid-500 to-petal-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
