
import type { Product, Category, Combo } from '@/types/menu';

export const categories: Category[] = [
  { id: 'coffee', name: 'Café', icon: '☕' },
  { id: 'signature', name: 'Bebidas de Autor', icon: '🍹' },
  { id: 'juices', name: 'Jugos, Aguas & Gaseosas', icon: '🥤' },
  { id: 'infusions', name: 'Infusiones', icon: '🫖' },
  { id: 'pastries', name: 'Pastelería', icon: '🧁' },
  { id: 'salty', name: 'Saladitos', icon: '🥙' },
  { id: 'cocktails', name: 'Bebidas & Cócteles', icon: '🍸' },
  { id: 'special', name: 'Pedidos Especiales', icon: '🎂' }
];

export const products: Product[] = [
  // CAFÉ
  { id: 'ristretto', name: 'Ristretto Doble', description: 'Café concentrado con sabor intenso', price: 15, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'espresso', name: 'Espresso Doble', description: 'Café espresso clásico', price: 18, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'americano', name: 'Americano', description: 'Café negro suave y aromático', price: 18, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'cortado', name: 'Cortado', description: 'Espresso con un toque de leche', price: 15, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'macchiato', name: 'Macchiato', description: 'Espresso marcado con espuma de leche', price: 18, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'flat-white', name: 'Flat White', description: 'Café con leche texturizada', price: 20, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso con espuma de leche cremosa', price: 22, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'latte', name: 'Latte', description: 'Café con abundante leche vaporizada', price: 23, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'mocca-latte', name: 'Mocca Latte', description: 'Latte con chocolate y crema', price: 25, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'sultan', name: 'Sultan', description: 'Café especial de la casa', price: 25, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'frappe', name: 'Frappé', description: 'Café frío con hielo y crema', price: 30, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'berry-cold-brew', name: 'Berry Cold Brew', description: 'Café frío con frutos rojos', price: 28, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },
  { id: 'espresso-tonic', name: 'Espresso Tonic', description: 'Espresso con agua tónica', price: 35, category: 'coffee', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400' },

  // BEBIDAS DE AUTOR
  { id: 'golden-milk', name: 'Golden Milk', description: 'Leche dorada con cúrcuma y especias', price: 20, category: 'signature', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'iced-tea', name: 'Iced Tea', description: 'Té helado refrescante', price: 25, category: 'signature', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'blue-crush', name: 'Blue Crush', description: 'Bebida azul refrescante', price: 25, category: 'signature', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'hibiscus-lemonade', name: 'Hibiscus Lemonade', description: 'Limonada con flores de hibisco', price: 25, category: 'signature', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'matcha-banana', name: 'Matcha Banana', description: 'Smoothie de matcha y plátano', price: 28, category: 'signature', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'red-berry-soda', name: 'Soda de Frutos Rojos', description: 'Soda con frutos rojos naturales', price: 25, category: 'signature', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },

  // JUGOS, AGUAS & GASEOSAS
  { id: 'pineapple-juice', name: 'Piña', description: 'Jugo natural de piña', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'coconut-juice', name: 'Coco', description: 'Agua de coco natural', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'mango-juice', name: 'Mango', description: 'Jugo fresco de mango', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'banana-juice', name: 'Guineo', description: 'Jugo cremoso de plátano', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'strawberry-juice', name: 'Frutilla', description: 'Jugo dulce de fresa', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'peach-juice', name: 'Durazno', description: 'Jugo suave de durazno', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'passion-fruit-juice', name: 'Maracuyá', description: 'Jugo tropical de maracuyá', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'achachairu-juice', name: 'Achachairu', description: 'Jugo exótico de achachairu', price: 20, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'still-water', name: 'Agua sin gas', description: 'Agua mineral natural', price: 10, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'sparkling-water', name: 'Agua con gas', description: 'Agua mineral con gas', price: 15, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'sprite', name: 'Sprite | Sprite Zero', description: 'Bebida gaseosa de limón', price: 15, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'coca-cola', name: 'Coca-Cola | Coca-Cola Zero', description: 'Bebida gaseosa clásica', price: 15, category: 'juices', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },

  // INFUSIONES
  { id: 'chocolate-sunshine', name: 'Chocolate Sunshine', description: 'Infusión con notas a naranja y sensación de chocolate con una ligera nota a canela.', price: 23, category: 'infusions', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'cha-cha-chai', name: 'Cha Cha Chai', description: 'Hebras de té negro de Sri Lanka, con rooibos y un toque de canela tostada.', price: 23, category: 'infusions', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'pineapple-blues', name: 'Pineapple Blues', description: 'Flores originarias del sur de Asia infusionado con té negro, canela tostada y piña.', price: 23, category: 'infusions', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'dolce-vita', name: 'Dolce Vita', description: 'Tisana de menta ligero y refrescante con regaliz y anís.', price: 23, category: 'infusions', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },
  { id: 'jazmin', name: 'Jazmín', description: 'Blend de té verde japonés de corte imperial con delicados pétalos de jazmín.', price: 23, category: 'infusions', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400' },

  // PASTELERÍA
  { id: 'apple-crumble', name: 'Torta Apple Crumble', description: 'Bizcochuelo de especias con manzanas tiernas rebosadas en canela envueltas en una colorida dorada y crujiente con caramelo salado.', price: 15, category: 'pastries', hasVariant: true, variantName: 'con helado', variantPrice: 25, variantDescription: 'También disponible con una porción de nuestro helado de crema americana, cubierto con caramelo.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'red-velvet', name: 'Torta Red Velvet', description: 'Mini torta de bizcochuelo aterciopelado de red velvet, crema de relleno de crema dulce de queso cremoso y frutos rojos frescos.', price: 15, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'carrot-cake', name: 'Torta de Zanahoria', description: 'Mini torta de zanahoria especiada con canela y nuez moscada, capas de relleno de crema dulce de queso cremoso, queso caramelizado y nuez caramelizado.', price: 15, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'chocolate-cake', name: 'Torta de Chocolate', description: 'Bizcochuelo suave y esponjoso con sabor a chocolate, relleno de una mermelada de frutilla de la casa, acompañado de un buttercream de merengue suizo.', price: 25, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'cheesecake', name: 'Cheesecake', description: 'Tradicional tarta de queso americana, base de galletas y un cremoso relleno horneado de queso crema acompañada con una reducción de frutos rojos (opcional).', price: 25, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'brownie', name: 'Brownie', description: 'Amor al primer bocado, una textura clásica ultra húmeda perfecta para todos los amantes del chocolate.', price: 10, category: 'pastries', hasVariant: true, variantName: 'con helado', variantPrice: 20, variantDescription: 'También disponible con una porción de nuestro helado de crema americana, cubierto con salsa de chocolate.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'tiramisu', name: 'Postre Tiramisú', description: 'Relleno de tiramisú con dos capas de bizcochuelo de soletilla humedecido con almíbar de café con vino tinto y cacao en polvo.', price: 25, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'creme-brulee', name: 'Crème Brûlée', description: 'Consistente crema pastelera con frutos rojos, aromatizada con licor y vainilla; cubierta de un caramelo crujiente.', price: 20, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'yogurt-bowl', name: 'Yogurt Bowl', description: 'Yogurt griego y frutas de estación servidas con miel silvestre y un grato de la casa.', price: 25, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'orange-cake', name: 'Queque de Naranja', description: 'Bizcochuelo dulce con sabor a naranja y vainilla cubierto con una capa de buttercream sabor a naranja.', price: 12, category: 'pastries', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },

  // SALADITOS
  { id: 'bruschetta-capri', name: 'Bruschetta Capri', description: 'Pan de masa madre grillado en aceite de oliva en una cama de pesto casero, tomate deshidratado, queso mozzarella fresco y jamón serrano con un toque de aceto balsámico.', price: 45, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'croissant-blt', name: 'Croissant BLT', description: 'Croissant con salsa alioli, tocino crujiente sobre una cama de lechuga y rodajas de tomate.', price: 35, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'croissant-hawaiano', name: 'Croissant Hawaiano', description: 'Pasta de queso crema y ricota, piña caramelizada y lonjas de bondiola.', price: 35, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'croissant-jamon-huevo', name: 'Croissant Jamón & Huevo', description: 'Omelette sobre una cama de lechuga romana acompañado de lonjas de bondiola picada, tomates cherry y una reducción de aceto balsámico.', price: 35, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'bruschetta-capresse', name: 'Bruschetta Capresse', description: 'Pan de masa madre crujiente, queso mozzarella, pesto de albahaca fresca y tomate deshidratados.', price: 40, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'bruschetta-atun', name: 'Bruschetta de Atún', description: 'Pan de masa madre con aceite de oliva, queso crema saborizado con cilantro acompañado de atún, palta, láminas de pepino fresco y tomates cherrys confitados.', price: 40, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'french-toast', name: 'French Toast', description: 'Tostadas de pan brioche, acompañadas de mantequilla de maní artesana y servidas con yogurt griego y reducción de frutos rojos.', price: 40, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'sandwich-lomito', name: 'Sandwich de Lomito', description: 'Pan ciabatta tostado con lomito de res marinado, cebolla caramelizada con whiskey, champiñones salteados y queso provolone ahumado acompañado de salsa Jalapeño.', price: 40, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'croque-madame', name: 'Croque Madame', description: 'Sandwich de pernil y queso mozzarella gratinado en pan brioche, acompañado de rúcula fresca, salsa de provolone y huevo poché.', price: 40, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },
  { id: 'american-breakfast', name: 'Desayuno Americano', description: 'Desayuno completo de huevos al gusto, tocino, pancakes y tostadas acompañado con un café americano o cappuccino y un jugo (sabor a elección: Piña, Coco, Mango).', price: 55, category: 'salty', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400' },

  // BEBIDAS & CÓCTELES
  { id: 'mimosa', name: 'Mimosa', description: 'Cóctel refrescante con champagne y jugo de naranja', price: 30, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'sangrani', name: 'Sangrani', description: 'Sangría especial de la casa', price: 35, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'pina-colada', name: 'Piña Colada', description: 'Cóctel tropical con piña y coco', price: 35, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'mango-margarita', name: 'Mango Margarita', description: 'Margarita tropical con mango fresco', price: 35, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'gin-tonic', name: 'Gin Tonic', description: 'Cóctel clásico con gin premium', price: 40, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'frozen-sangria', name: 'Frozen Sangria', description: 'Sangría helada refrescante', price: 40, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'aperol-spritz', name: 'Aperol Spritz', description: 'Aperitivo italiano refrescante', price: 35, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'whiskey-sour', name: 'Whiskey Sour de Achachairu', description: 'Whiskey sour con toque tropical', price: 35, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'uyuni-lager', name: 'Uyuni Lager', description: 'Cerveza artesanal local', price: 25, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  { id: 'uyuni-sal', name: 'Uyuni Sal', description: 'Cerveza artesanal con sal', price: 25, category: 'cocktails', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },

  // PEDIDOS ESPECIALES
  { id: 'queque-entero', name: 'Queque Entero 8p.', description: 'Bizcocho esponjoso aromatizado con jugo de naranja o limón, con un ligero glaseado de azúcar. También disponible en sabor de vainilla y el chocolate en un espiral de colores.', price: 70, category: 'special', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'red-velvet-special', name: 'Torta Red Velvet', description: 'Nuestro clásico infaltable de la cocina americana. Torta desnuda de bizcochuelo aterciopelado de red velvet, tres capas de relleno de crema dulce de queso cremoso y frutos rojos frescos.', price: 150, category: 'special', hasVariant: true, variantName: '16p', variantPrice: 240, image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'carrot-cake-special', name: 'Torta de Zanahoria', description: 'Bizcochuelo húmedo, suave y esponjoso de zanahorias; aromatizado con canela y un toque de nuez moscada. Dos capas de relleno de crema dulce de queso cremoso, nueces confitadas, caramelo salado y zanahorias deshidratadas.', price: 150, category: 'special', hasVariant: true, variantName: '16p', variantPrice: 240, image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'cheesecake-helado', name: 'Cheesecake Helado 10p.', description: 'Cheesecake especial con helado', price: 250, category: 'special', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'ny-cheesecake', name: 'NY Cheesecake 10p.', description: 'Tradicional tarta de queso americana, base de galletas y un cremoso relleno horneado de queso crema acompañada con una reducción de frutos rojos (opcional).', price: 280, category: 'special', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' },
  { id: 'chocolate-cake-special', name: 'Torta de Chocolate 10p.', description: 'Bizcochuelo húmedo y suave de chocolate, relleno de mermelada de frutilla artesanal. Cubierta suave y aterciopelada de crema de chocolate y ganache de chocolate. Un festín en el paladar.', price: 200, category: 'special', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400' }
];

export const combos: Combo[] = [
  {
    id: 'desayuno-orquidea',
    name: 'Combo Desayuno Orquídea',
    description: 'Desayuno Americano + Café Americano + Jugo Natural',
    price: 75,
    items: ['Desayuno Americano', 'Café Americano', 'Jugo (Piña, Coco o Mango)'],
    isSpecialOffer: true
  },
  {
    id: 'tarde-dulce',
    name: 'Combo Tarde Dulce',
    description: 'Torta Apple Crumble con Helado + Infusión',
    price: 45,
    items: ['Torta Apple Crumble con Helado', 'Infusión a elección'],
    isSpecialOffer: true
  },
  {
    id: 'sunset-delight',
    name: 'Combo Sunset Delight',
    description: 'Bruschetta Capri + Mimosa',
    price: 70,
    items: ['Bruschetta Capri', 'Mimosa'],
    isSpecialOffer: true
  },
  {
    id: 'dia-especial',
    name: 'Combo Día Especial',
    description: 'Croque Madame + Espresso Doble + Red Velvet',
    price: 75,
    items: ['Croque Madame', 'Espresso Doble', 'Torta Red Velvet'],
    isSpecialOffer: true,
    whatsappLink: 'https://wa.me/59112345678?text=Hola! Me interesa el Combo Día Especial'
  }
];
