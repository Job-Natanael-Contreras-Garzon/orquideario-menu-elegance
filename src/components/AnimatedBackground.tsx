
import React from 'react';
import { Background3D } from './Background3D';

interface AnimatedBackgroundProps {
  className?: string;
  variant?: 'home' | 'menu';
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  className = '', 
  variant = 'home' 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient background with orchid garden theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-50 via-orchid-50 to-petal-50 dark:from-leaf-950 dark:via-orchid-950 dark:to-petal-950 transition-colors duration-500"></div>
      
      {/* Enhanced floating shapes with orchid colors */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-orchid-400/30 to-petal-400/30 dark:from-orchid-600/20 dark:to-petal-600/20 rounded-full blur-3xl animate-float transition-colors duration-500"></div>
        
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-leaf-400/30 to-orchid-400/30 dark:from-leaf-600/20 dark:to-orchid-600/20 rounded-full blur-3xl animate-float transition-colors duration-500" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-petal-300/40 to-leaf-300/40 dark:from-petal-500/25 dark:to-leaf-500/25 rounded-full blur-2xl animate-float transition-colors duration-500" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-orchid-300/40 to-petal-300/40 dark:from-orchid-500/25 dark:to-petal-500/25 rounded-full blur-2xl animate-float transition-colors duration-500" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] transition-opacity duration-500"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* 3D Objects with improved error handling */}
      <div className="absolute inset-0">
        <React.Suspense fallback={null}>
          <Background3D />
        </React.Suspense>
      </div>

      {/* Enhanced overlay for better contrast */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 transition-colors duration-500"></div>
      
      {/* Additional animated particles for menu variant with orchid colors */}
      {variant === 'menu' && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orchid-400/20 dark:bg-orchid-500/30 rounded-full animate-float"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
