
import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
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
    <div className="min-h-screen bg-background">
      <Header showBackButton onBackClick={onBackClick} />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('menu.title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de café gourmet, pasteles artesanales y bebidas especiales
            en un ambiente único rodeado de orquídeas.
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <CategoryGrid
          categories={categories}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        {/* Regular Products */}
        {filteredProducts.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Combos Section */}
        {showCombos && (
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6 text-center">
              {t('category.combos')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {combos.map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>
          </div>
        )}

        {/* Special Orders Section */}
        {showSpecialOrders && (
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6 text-center">
              {t('category.special')}
            </h2>
            <SpecialOrdersSection
              products={specialOrderProducts}
              onProductClick={handleProductClick}
            />
          </div>
        )}

        {/* No results message */}
        {filteredProducts.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No se encontraron productos que coincidan con "{searchTerm}"
            </p>
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
