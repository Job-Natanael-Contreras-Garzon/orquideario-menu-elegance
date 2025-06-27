
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
      {/* Gradient background with improved dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500"></div>
      
      {/* Enhanced floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-accent-400/30 dark:from-primary-600/20 dark:to-accent-600/20 rounded-full blur-3xl animate-float transition-colors duration-500"></div>
        
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-accent-400/30 to-primary-400/30 dark:from-accent-600/20 dark:to-primary-600/20 rounded-full blur-3xl animate-float transition-colors duration-500" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-300/40 to-accent-300/40 dark:from-primary-500/25 dark:to-accent-500/25 rounded-full blur-2xl animate-float transition-colors duration-500" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-accent-300/40 to-primary-300/40 dark:from-accent-500/25 dark:to-primary-500/25 rounded-full blur-2xl animate-float transition-colors duration-500" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] transition-opacity duration-500"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* 3D Objects with error boundary */}
      <div className="absolute inset-0">
        <React.Suspense fallback={<div></div>}>
          <Background3D />
        </React.Suspense>
      </div>

      {/* Enhanced overlay for better contrast */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 transition-colors duration-500"></div>
      
      {/* Additional animated particles for menu variant */}
      {variant === 'menu' && (
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/20 dark:bg-primary-500/30 rounded-full animate-float"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${15 + (i * 8)}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
