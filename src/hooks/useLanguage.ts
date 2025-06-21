
import { useState, useEffect, createContext, useContext } from 'react';
import type { Language } from '@/types/menu';

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: Language[];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations
const translations = {
  es: {
    'home.title': 'El Orquídeario',
    'home.slogan': 'Espacio Memorable',
    'home.reservations': 'Hacer Reservas por WhatsApp',
    'home.menu': 'Ver Menú',
    'menu.title': 'Nuestro Menú',
    'menu.search': 'Buscar productos...',
    'category.beverages': 'Bebidas',
    'category.coffee': 'Café',
    'category.signature': 'Bebidas de Autor',
    'category.juices': 'Jugos, Aguas & Gaseosas',
    'category.infusions': 'Infusiones',
    'category.pastries': 'Pastelería',
    'category.salty': 'Saladitos',
    'category.cocktails': 'Bebidas & Cócteles',
    'category.combos': 'Paquetes & Combos',
    'category.special': 'Pedidos Especiales',
    'special.conditions': 'Condiciones Especiales',
    'special.schedule': 'Se toman pedidos de martes a domingo de 9 AM a 9 PM',
    'special.advance': 'Los pedidos requieren 48 horas de aviso previo con 50% por adelantado',
    'special.consultation': 'Sabores o decoraciones no listadas deben consultarse con producción',
    'price.currency': 'Bs',
    'product.with': 'con',
    'product.extra': 'Extra',
    'theme.toggle': 'Cambiar tema',
    'language.toggle': 'Cambiar idioma'
  },
  en: {
    'home.title': 'El Orquídeario',
    'home.slogan': 'Memorable Space',
    'home.reservations': 'Make Reservations via WhatsApp',
    'home.menu': 'View Menu',
    'menu.title': 'Our Menu',
    'menu.search': 'Search products...',
    'category.beverages': 'Beverages',
    'category.coffee': 'Coffee',
    'category.signature': 'Signature Drinks',
    'category.juices': 'Juices, Waters & Sodas',
    'category.infusions': 'Infusions',
    'category.pastries': 'Pastries',
    'category.salty': 'Savory Snacks',
    'category.cocktails': 'Drinks & Cocktails',
    'category.combos': 'Packages & Combos',
    'category.special': 'Special Orders',
    'special.conditions': 'Special Conditions',
    'special.schedule': 'Orders taken Tuesday to Sunday from 9 AM to 9 PM',
    'special.advance': 'Orders require 48 hours advance notice with 50% prepayment',
    'special.consultation': 'Unlisted flavors or decorations must be consulted with production',
    'price.currency': 'Bs',
    'product.with': 'with',
    'product.extra': 'Extra',
    'theme.toggle': 'Toggle theme',
    'language.toggle': 'Toggle language'
  }
};

export const useLanguageHook = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('el-orquideario-language', lang.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code][key as keyof typeof translations.es] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('el-orquideario-language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  return { currentLanguage, setLanguage, t, languages };
};
