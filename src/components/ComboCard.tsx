
import React from 'react';
import { Combo } from '@/types/menu';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ComboCardProps {
  combo: Combo;
}

export const ComboCard: React.FC<ComboCardProps> = ({ combo }) => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    if (combo.whatsappLink) {
      window.open(combo.whatsappLink, '_blank');
    }
  };

  return (
    <Card className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-800/80 bg-white dark:bg-gray-900/95 hover:border-gray-200 dark:hover:border-gray-700">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="font-playfair text-lg text-gray-900 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
            {combo.name}
          </CardTitle>
          {combo.isSpecialOffer && (
            <Badge className="bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-sm">
              ✨ Oferta
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {combo.description}
        </p>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 flex items-center">
            <span className="w-1 h-4 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></span>
            Incluye:
          </h4>
          <ul className="space-y-2 pl-3">
            {combo.items.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 flex-shrink-0 shadow-sm"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
            {combo.price} {t('price.currency')}
          </span>
          
          {combo.whatsappLink && (
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              size="sm"
            >
              📱 Reservar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
