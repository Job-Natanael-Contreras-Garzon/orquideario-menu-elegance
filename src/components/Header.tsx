
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, ArrowLeft, Monitor } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ showBackButton, onBackClick }) => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const { currentLanguage, setLanguage, languages, t } = useLanguage();

  const toggleLanguage = () => {
    const nextLang = languages.find(lang => lang.code !== currentLanguage.code);
    if (nextLang) setLanguage(nextLang);
  };

  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor className="w-4 h-4" />;
    return resolvedTheme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl transition-all duration-500">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackClick}
              className="modern-button text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-black/20 group transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Volver
            </Button>
          )}
          <h1 className="text-xl font-display font-bold gradient-text animate-gradient">
            El Orquídeario
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="modern-button text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-105"
            title={t('language.toggle')}
          >
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{currentLanguage.flag}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="modern-button text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-105"
            title={t('theme.toggle')}
          >
            {getThemeIcon()}
          </Button>
        </div>
      </div>
    </header>
  );
};
