
import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from '@/components/LanguageProvider';
import { Home } from '@/pages/Home';
import { Menu } from '@/pages/Menu';

const queryClient = new QueryClient();

type Page = 'home' | 'menu';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToMenu = () => setCurrentPage('menu');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Toaster />
            <Sonner />
            
            {currentPage === 'home' && (
              <Home onMenuClick={navigateToMenu} />
            )}
            
            {currentPage === 'menu' && (
              <Menu onBackClick={navigateToHome} />
            )}
          </div>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
