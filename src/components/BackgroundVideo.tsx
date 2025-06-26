
import React from 'react';
import { FernGarden } from './FernGarden';

interface BackgroundVideoProps {
  className?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* 3D Fern Garden */}
      <div className="absolute inset-0 opacity-30">
        <FernGarden />
      </div>
      
      {/* Original gradient background */}
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

      {/* Additional mystical particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            🌿
          </div>
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
    </div>
  );
};
