
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
    <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-lg border-accent/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="font-playfair text-lg">
            {combo.name}
          </CardTitle>
          {combo.isSpecialOffer && (
            <Badge className="bg-accent text-accent-foreground">
              ✨ Oferta
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {combo.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Incluye:</h4>
          <ul className="space-y-1">
            {combo.items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-2xl font-bold text-primary">
            {combo.price} {t('price.currency')}
          </span>
          
          {combo.whatsappLink && (
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white"
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
