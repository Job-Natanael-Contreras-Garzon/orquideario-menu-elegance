
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
    'home.reserve_button': 'Hacer Reserva',
    'home.menu_button': 'Ver Menú',
    'home.intro1_pre': 'Más de',
    'home.intro1_highlight': '500 especies de orquídeas',
    'home.intro1_post': 'te esperan en nuestro espacio memorable.',
    'home.intro2': 'Disfruta de café gourmet, pasteles artesanales y una experiencia única en un ambiente exclusivo.',
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
    'special.schedule': 'Pedidos: Martes a Domingo, 9 AM - 9 PM',
    'special.advance': 'Pedidos con 48h de anticipación y 50% de adelanto.',
    'special.consultation': 'Consultar por sabores o decoraciones especiales.',
    'price.currency': 'Bs',
    'product.with': 'con',
    'product.extra': 'Extra',
    'theme.toggle': 'Cambiar tema',
    'language.toggle': 'Cambiar idioma'
  },
  en: {
    'home.title': 'El Orquídeario',
    'home.slogan': 'An Unforgettable Space',
    'home.reserve_button': 'Make a Reservation',
    'home.menu_button': 'View Menu',
    'home.intro1_pre': 'More than',
    'home.intro1_highlight': '500 species of orchids',
    'home.intro1_post': 'await you in our memorable space.',
    'home.intro2': 'Enjoy gourmet coffee, artisanal pastries, and a unique experience in an exclusive atmosphere.',
    'menu.title': 'Our Menu',
    'menu.search': 'Search products...',
    'category.beverages': 'Beverages',
    'category.coffee': 'Coffee',
    'category.signature': 'Signature Drinks',
    'category.juices': 'Juices, Waters & Sodas',
    'category.infusions': 'Infusions',
    'category.pastries': 'Pastries',
    'category.salty': 'Savory Snacks',
    'category.cocktails': 'Cocktails',
    'category.combos': 'Packages & Combos',
    'category.special': 'Special Orders',
    'special.conditions': 'Special Conditions',
    'special.schedule': 'Orders available: Tue-Sun, 9 AM - 9 PM',
    'special.advance': '48-hour advance notice and 50% down payment required.',
    'special.consultation': 'For custom flavors or decorations, please inquire.',
    'price.currency': 'Bs',
    'product.with': 'with',
    'product.extra': 'Extra',
    'theme.toggle': 'Toggle theme',
    'language.toggle': 'Toggle language'
  }
};

export const createLanguageContextValue = (): LanguageContextType => {
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
