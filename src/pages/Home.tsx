
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';

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
      <AnimatedBackground variant="home" />
      <Header />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Logo with enhanced modern design */}
          <div className="relative mx-auto mb-12 animate-fade-in">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-500/25 glow-effect animate-pulse">
              <img 
                src="/lovable-uploads/cf1b229d-b116-4f68-88ef-d9a5b2169013.png" 
                alt="El Orquídeario Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-20 animate-gradient"></div>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="gradient-text animate-gradient">El Orquídeario</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium transition-colors duration-500">
              Espacio Memorable
            </p>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed transition-colors duration-500">
                Más de <span className="font-semibold text-primary-600 dark:text-primary-400">500 especies de orquídeas</span> te esperan en nuestro espacio memorable.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
                Disfruta de café gourmet, pasteles artesanales y una experiencia única en un ambiente exclusivo.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in pt-8">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="modern-button bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 group transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">📱</span>
                <span className="font-semibold">Hacer Reserva</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
            
            <Button
              onClick={onMenuClick}
              size="lg"
              variant="outline"
              className="modern-button glass border-2 border-primary-200 dark:border-primary-800 text-gray-800 dark:text-gray-100 hover:bg-primary-50 dark:hover:bg-primary-950/50 group transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Coffee className="w-5 h-5" />
                <span className="font-semibold">Ver Menú</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          </div>
          
          {/* Enhanced feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 animate-fade-in">
            {[
              { icon: '🌺', title: '500+ Orquídeas', desc: 'Especies únicas' },
              { icon: '☕', title: 'Café Gourmet', desc: 'Experiencia premium' },
              { icon: '🍰', title: 'Pasteles Artesanales', desc: 'Hechos con amor' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="floating-card glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 transition-colors duration-500">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 dark:opacity-30 transition-opacity duration-500"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-6 h-6 text-primary-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
