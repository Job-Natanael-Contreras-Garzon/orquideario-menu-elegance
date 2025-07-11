
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu button clicked - calling onMenuClick'); // Debug log
    onMenuClick();
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <div className="relative h-[200vh]">
        {/* Sticky Hero Section */}
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Clean gradient background without yellow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-leaf-50 via-green-100 to-leaf-200 dark:from-leaf-950 dark:via-background dark:to-green-950"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute inset-0">
              {/* Large circle */}
              <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-orchid-400/20 to-petal-400/20 rounded-full blur-3xl animate-float"></div>
              
              {/* Medium circle */}
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-petal-400/20 to-leaf-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Small circles */}
              <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-leaf-300/30 to-orchid-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-orchid-300/30 to-petal-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                 style={{
                   backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
                   backgroundSize: '50px 50px'
                 }}>
            </div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex-grow flex items-center justify-center px-4">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <div className="relative mx-auto mb-12 animate-fade-in">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orchid-500 to-petal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orchid-500/25 glow-effect animate-pulse">
                  <img 
                    src="/lovable-uploads/cf1b229d-b116-4f68-88ef-d9a5b2169013.png" 
                    alt="El Orquídeario Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-orchid-600 to-petal-600 rounded-3xl blur opacity-20 animate-gradient"></div>
              </div>
              
              <div className="space-y-6 animate-slide-up">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold">
                  <span className="bg-gradient-to-r from-orchid-600 via-primary-500 to-petal-500 bg-clip-text text-transparent animate-gradient">El Orquídeario</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium transition-colors duration-500">
                  {t('home.slogan')}
                </p>
                <div className="max-w-3xl mx-auto space-y-4">
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed transition-colors duration-500">
                    {t('home.intro1_pre')} <span className="font-semibold text-orchid-600 dark:text-orchid-400">{t('home.intro1_highlight')}</span> {t('home.intro1_post')}
                  </p>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
                    {t('home.intro2')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in pt-8">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="modern-button bg-gradient-to-r from-orchid-500 to-primary-600 hover:from-orchid-600 hover:to-primary-700 text-white shadow-lg shadow-orchid-500/25 hover:shadow-xl hover:shadow-orchid-500/30 group transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📱</span>
                    <span className="font-semibold">{t('home.reserve_button')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Button>
                <Button
                  onClick={handleMenuClick}
                  size="lg"
                  variant="outline"
                  className="modern-button glass border-2 border-orchid-200 dark:border-orchid-800 text-gray-800 dark:text-gray-100 hover:bg-orchid-50 dark:hover:bg-orchid-950/50 group transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-5 h-5" />
                    <span className="font-semibold">{t('home.menu_button')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Blur effect at the bottom */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>

        {/* Scrollable Content Section */}
        <div className="absolute top-full left-0 right-0 z-30 bg-background">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
          
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🌺', title: '500+ Orquídeas', desc: 'Especies únicas' },
                { icon: '☕', title: 'Café Gourmet', desc: 'Experiencia premium' },
                { icon: '🍰', title: 'Pasteles Artesanales', desc: 'Hechos con amor' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="floating-card glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 bg-white dark:bg-black/10 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-500">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};
