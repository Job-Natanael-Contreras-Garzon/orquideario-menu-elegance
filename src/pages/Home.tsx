
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { Button } from '@/components/ui/button';

interface HomeProps {
  onMenuClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onMenuClick }) => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/59112345678?text=Hola! Me gustaría hacer una reserva en El Orquídeario', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundVideo />
      <Header />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          {/* Logo placeholder */}
          <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
            <span className="text-4xl">🌺</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white drop-shadow-2xl animate-fade-in">
              {t('home.title')}
            </h1>
            
            <p className="font-playfair text-2xl md:text-3xl text-white/90 drop-shadow-lg animate-fade-in">
              {t('home.slogan')}
            </p>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in">
              Más de 500 especies de orquídeas te esperan en nuestro espacio memorable. 
              Disfruta de café gourmet, pasteles artesanales y una experiencia única.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              📱 {t('home.reservations')}
            </Button>
            
            <Button
              onClick={onMenuClick}
              size="lg"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              📖 {t('home.menu')}
            </Button>
          </div>
          
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-30 animate-bounce"
                style={{
                  left: `${10 + (i * 10)}%`,
                  top: `${20 + (i * 8)}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '3s'
                }}
              >
                🌸
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
