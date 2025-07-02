import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/59112345678?text=Hola! Me gustaría obtener más información sobre El Orquídeario', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/elorquideario', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/elorquideario', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:contacto@elorquideario.com', '_blank');
  };

  return (
    <footer className="relative bg-gradient-to-br from-orchid-950 via-gray-900 to-petal-950 text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orchid-500 to-petal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/lovable-uploads/cf1b229d-b116-4f68-88ef-d9a5b2169013.png" 
                    alt="El Orquídeario Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orchid-300 to-petal-300 bg-clip-text text-transparent">
                  El Orquídeario
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Un espacio memorable donde más de 500 especies de orquídeas te acompañan mientras disfrutas de café gourmet y pasteles artesanales en un ambiente único y exclusivo.
              </p>
              
              <div className="flex space-x-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                
                <div className="relative p-0.5 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  <Button
                    onClick={handleInstagramClick}
                    size="sm"
                    variant="outline"
                    className="relative w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="w-4 h-4 mr-2 text-pink-500" />
                    <span>Instagram</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-orchid-300 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-orchid-500 to-petal-500 rounded-full mr-3"></span>
                Contacto
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group cursor-pointer" onClick={handleEmailClick}>
                  <Mail className="w-5 h-5 text-orchid-400 mt-0.5 group-hover:text-orchid-300 transition-colors duration-300" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300">contacto@elorquideario.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orchid-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="text-gray-200">+591 123 456 78</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orchid-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-gray-200">Av. Libertador 123<br />Santa Cruz, Bolivia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-orchid-300 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-orchid-500 to-petal-500 rounded-full mr-3"></span>
                Horarios
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orchid-400" />
                  <div>
                    <p className="text-sm text-gray-400">Lunes - Viernes</p>
                    <p className="text-gray-200">7:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orchid-400" />
                  <div>
                    <p className="text-sm text-gray-400">Sábados - Domingos</p>
                    <p className="text-gray-200">8:00 AM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-orchid-900/50 to-petal-900/50 rounded-lg border border-orchid-700/30">
                  <p className="text-sm text-orchid-200">
                    <strong>Reservas recomendadas</strong><br />
                    Especialmente fines de semana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-orchid-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>© 2025 El Orquídeario. Hecho con</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>en Bolivia</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <button 
                  onClick={handleFacebookClick}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleInstagramClick}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-orchid-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orchid-500 via-primary-500 to-petal-500"></div>
    </footer>
  );
};
