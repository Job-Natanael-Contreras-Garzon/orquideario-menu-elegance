
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
import { Button } from '@/components/ui/button';

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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {product.image && (
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              {product.discount && (
                <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                  {product.discount.label}
                </Badge>
              )}
            </div>
          )}
          
          <div className="space-y-3">
            <Badge variant="secondary">
              {t(`category.${product.category}`)}
            </Badge>
            
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">
                  {product.price} {t('price.currency')}
                </span>
              </div>
              
              {product.hasVariant && product.variantName && (
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 capitalize">
                    {t('product.with')} {product.variantName}
                  </h4>
                  {product.variantDescription && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.variantDescription}
                    </p>
                  )}
                  <span className="text-xl font-bold text-accent">
                    {product.variantPrice} {t('price.currency')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
