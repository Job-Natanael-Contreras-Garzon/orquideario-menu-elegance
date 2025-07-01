
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
    <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orchid-500/20 border-orchid-200 dark:border-orchid-800 bg-gradient-to-br from-white via-orchid-50/30 to-petal-50/20 dark:from-card dark:via-orchid-950/30 dark:to-petal-950/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="font-playfair text-lg text-orchid-800 dark:text-orchid-200 group-hover:text-orchid-600 dark:group-hover:text-orchid-300 transition-colors duration-300">
            {combo.name}
          </CardTitle>
          {combo.isSpecialOffer && (
            <Badge className="bg-gradient-to-r from-petal-500 to-accent-500 text-petal-50 shadow-md">
              ✨ Oferta
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {combo.description}
        </p>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-orchid-700 dark:text-orchid-300 flex items-center">
            <span className="w-1 h-4 bg-gradient-to-b from-orchid-500 to-petal-500 rounded-full mr-2"></span>
            Incluye:
          </h4>
          <ul className="space-y-2 pl-3">
            {combo.items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300">
                <span className="w-2 h-2 bg-gradient-to-r from-orchid-400 to-petal-400 rounded-full mr-3 flex-shrink-0 shadow-sm"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-orchid-200/50 dark:border-orchid-800/50">
          <span className="text-2xl font-bold bg-gradient-to-r from-orchid-600 to-primary-600 bg-clip-text text-transparent group-hover:from-orchid-700 group-hover:to-primary-700 transition-all duration-300">
            {combo.price} {t('price.currency')}
          </span>
          
          {combo.whatsappLink && (
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orchid-600 to-primary-600 hover:from-orchid-700 hover:to-primary-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
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
