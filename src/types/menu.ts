
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  image?: string;
  video?: string;
  hasVariant?: boolean;
  variantName?: string;
  variantPrice?: number;
  variantDescription?: string;
  discount?: {
    percentage: number;
    label: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
  isSpecialOffer?: boolean;
  whatsappLink?: string;
}

export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}
