
import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { SearchBar } from '@/components/SearchBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { SpecialOrdersSection } from '@/components/SpecialOrdersSection';
import { ComboCard } from '@/components/ComboCard';
import { categories, products, combos } from '@/data/menuData';
import { Product } from '@/types/menu';

interface MenuProps {
  onBackClick: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onBackClick }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? '' : categoryId);
  };

  const showSpecialOrders = selectedCategory === 'special' || (!selectedCategory && !searchTerm);
  const showCombos = selectedCategory === 'combos' || (!selectedCategory && !searchTerm);
  const specialOrderProducts = products.filter(p => p.category === 'special');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="menu" />
      <Header showBackButton onBackClick={onBackClick} />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4 animate-gradient">
            {t('menu.title')}
          </h1>
          <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-500">
            Descubre nuestra selección de café gourmet, pasteles artesanales y bebidas especiales
            en un ambiente único rodeado de orquídeas.
          </p>
        </div>

        <div className="animate-slide-up">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          <CategoryGrid
            categories={categories}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>

        {/* Regular Products with enhanced animations */}
        {filteredProducts.length > 0 && (
          <div className="mb-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Combos Section with enhanced styling */}
        {showCombos && (
          <div className="mb-12 animate-fade-in">
            <h2 className="font-display text-3xl font-bold gradient-text mb-6 text-center animate-gradient">
              {t('category.combos')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {combos.map((combo, index) => (
                <div
                  key={combo.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ComboCard combo={combo} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Orders Section with enhanced styling */}
        {showSpecialOrders && (
          <div className="mb-12 animate-fade-in">
            <h2 className="font-display text-3xl font-bold gradient-text mb-6 text-center animate-gradient">
              {t('category.special')}
            </h2>
            <SpecialOrdersSection
              products={specialOrderProducts}
              onProductClick={handleProductClick}
            />
          </div>
        )}

        {/* No results message with enhanced styling */}
        {filteredProducts.length === 0 && searchTerm && (
          <div className="text-center py-12 animate-fade-in">
            <div className="glass rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-muted-foreground dark:text-gray-300 text-lg transition-colors duration-500">
                No se encontraron productos que coincidan con "{searchTerm}"
              </p>
            </div>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
