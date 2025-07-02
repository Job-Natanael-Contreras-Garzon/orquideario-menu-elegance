
import React from 'react';
import { Product } from '@/types/menu';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-card/95 p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="font-playfair text-3xl text-gray-900 dark:text-gray-100">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 px-6 pb-6">
          {product.image && (
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
              />
              {product.discount && (
                <Badge className="absolute top-3 right-3 bg-white text-destructive border border-destructive/20 shadow-lg hover:bg-destructive/10 dark:bg-gray-900/90 dark:text-red-400 dark:border-red-400/20">
                  {product.discount.label}
                </Badge>
              )}
            </div>
          )}
          
          <div className="space-y-4">
            <Badge className="bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/80 transition-colors">
              {t(`category.${product.category}`)}
            </Badge>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {product.description}
            </p>
            
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {product.price} {t('price.currency')}
                </span>
              </div>
              
              {product.hasVariant && product.variantName && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 dark:bg-gray-800/60 dark:border-gray-700/80">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 capitalize">
                    {t('product.with')} {product.variantName}
                  </h4>
                  {product.variantDescription && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {product.variantDescription}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {product.variantPrice} {t('price.currency')}
                    </span>
                    {typeof product.variantPrice === 'string' && typeof product.price === 'string' && (
                      parseFloat(product.variantPrice) < parseFloat(product.price) && (
                        <span className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                          {Math.round((1 - parseFloat(product.variantPrice) / parseFloat(product.price)) * 100)}% {t('discount')}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
