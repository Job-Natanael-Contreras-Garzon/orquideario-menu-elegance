
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Product } from '@/types/menu';
import { ProductCard } from './ProductCard';

interface SpecialOrdersSectionProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const SpecialOrdersSection: React.FC<SpecialOrdersSectionProps> = ({ 
  products, 
  onProductClick 
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <Card className="border-accent/50">
        <CardHeader>
          <CardTitle className="font-playfair text-xl text-center">
            {t('special.conditions')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert>
            <AlertDescription>
              🕘 {t('special.schedule')}
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertDescription>
              💰 {t('special.advance')}
            </AlertDescription>
          </Alert>
          
          <Alert>
            <AlertDescription>
              📞 {t('special.consultation')}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};
