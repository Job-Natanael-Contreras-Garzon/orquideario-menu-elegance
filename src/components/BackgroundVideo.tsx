
import React from 'react';

interface BackgroundVideoProps {
  className?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Placeholder for background video - using a beautiful gradient for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-light via-forest-green/20 to-elegant-gold/30 dark:from-elegant-dark dark:via-forest-green/40 dark:to-elegant-gold/20"></div>
      
      {/* Animated floating orchids effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            🌺
          </div>
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
    </div>
  );
};
