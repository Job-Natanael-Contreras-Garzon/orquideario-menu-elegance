
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background/95 border-b border-orchid-200/50 dark:border-orchid-800/50 backdrop-blur-xl transition-all duration-500 shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackClick}
              className="text-orchid-700 dark:text-orchid-200 hover:bg-orchid-100 dark:hover:bg-orchid-900/50 group transition-all duration-300 hover:scale-105 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Volver
            </Button>
          )}
          <h1 className="text-xl font-display font-bold bg-gradient-to-r from-orchid-600 via-primary-500 to-petal-500 bg-clip-text text-transparent">
            El Orquídeario
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-orchid-700 dark:text-orchid-200 hover:bg-orchid-100 dark:hover:bg-orchid-900/50 transition-all duration-300 hover:scale-105 rounded-xl"
            title={t('language.toggle')}
          >
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{currentLanguage.flag}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-orchid-700 dark:text-orchid-200 hover:bg-orchid-100 dark:hover:bg-orchid-900/50 transition-all duration-300 hover:scale-105 rounded-xl"
            title={t('theme.toggle')}
          >
            {getThemeIcon()}
          </Button>
        </div>
      </div>
    </header>
  );
};
