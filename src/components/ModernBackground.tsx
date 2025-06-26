
import React from 'react';

interface ModernBackgroundProps {
  className?: string;
}

export const ModernBackground: React.FC<ModernBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large circle */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Medium circle */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Small circles */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-300/30 to-accent-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-accent-300/30 to-primary-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/20"></div>
    </div>
  );
};
