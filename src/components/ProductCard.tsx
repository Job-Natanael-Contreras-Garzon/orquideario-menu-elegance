
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
      className="h-full flex flex-col group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-900/95 hover:border-gray-200 dark:hover:border-gray-700 overflow-hidden"
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
              <Badge className="absolute top-2 right-2 bg-white text-destructive border border-destructive/20 shadow-md hover:bg-destructive/10 dark:bg-gray-900/90 dark:text-red-400 dark:border-red-400/20 transition-colors">
                {product.discount.label}
              </Badge>
            )}
            <Badge className="absolute top-2 left-2 bg-white/90 text-gray-800 text-xs border border-gray-100 shadow-sm hover:bg-gray-50 dark:bg-gray-800/90 dark:text-gray-200 dark:border-gray-700/80 dark:hover:bg-gray-700/80 transition-colors">
              {t(`category.${product.category}`)}
            </Badge>
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        )}
        
        <div className="p-4 flex flex-col flex-grow bg-white dark:bg-gray-900/95">
          <h3 className="font-playfair font-semibold text-lg mb-2 text-gray-900 group-hover:text-gray-800 dark:text-gray-100 dark:group-hover:text-gray-200 transition-colors duration-200">
            {product.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="space-y-1">
              <span className="text-lg font-bold text-gray-900 group-hover:text-gray-800 dark:text-gray-100 dark:group-hover:text-gray-200 transition-colors duration-200">
                {product.price} {t('price.currency')}
              </span>
              
              {product.hasVariant && product.variantName && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="capitalize">{t('product.with')} {product.variantName}: </span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {product.variantPrice} {t('price.currency')}
                    {typeof product.variantPrice === 'string' && typeof product.price === 'string' && (
                      parseFloat(product.variantPrice) < parseFloat(product.price) && (
                        <span className="ml-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded">
                          {Math.round((1 - parseFloat(product.variantPrice) / parseFloat(product.price)) * 100)}% {t('discount')}
                        </span>
                      )
                    )}
                  </span>
                </div>
              )}
            </div>
            {/* Visual indicator for interaction */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
