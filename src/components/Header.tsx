
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ showBackButton, onBackClick }) => {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, setLanguage, languages, t } = useLanguage();

  const toggleLanguage = () => {
    const nextLang = languages.find(lang => lang.code !== currentLanguage.code);
    if (nextLang) setLanguage(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackClick}
              className="hover:bg-accent"
            >
              ← Volver
            </Button>
          )}
          <h1 className="text-xl font-playfair font-bold text-primary">
            {t('home.title')}
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hover:bg-accent"
            title={t('language.toggle')}
          >
            <Globe className="h-4 w-4 mr-2" />
            {currentLanguage.flag}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hover:bg-accent"
            title={t('theme.toggle')}
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
