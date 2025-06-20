
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
      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-border/50 hover:border-accent"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {product.image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {product.discount && (
              <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                {product.discount.label}
              </Badge>
            )}
            <Badge className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs">
              {t(`category.${product.category}`)}
            </Badge>
          </div>
        )}
        
        <div className="p-4">
          <h3 className="font-playfair font-semibold text-lg mb-2 text-foreground group-hover:text-accent-foreground">
            {product.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-lg font-bold text-primary">
                {product.price} {t('price.currency')}
              </span>
              
              {product.hasVariant && product.variantName && (
                <div className="text-sm text-muted-foreground">
                  <span className="capitalize">{t('product.with')} {product.variantName}: </span>
                  <span className="font-semibold text-accent">
                    {product.variantPrice} {t('price.currency')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
