
import React, { Suspense, useRef, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ThreeJSErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ThreeJS Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center w-full h-full bg-black/10">
          <p className="text-gray-400">3D visualization not available</p>
        </div>
      );
    }

    return this.props.children;
  }
}

interface FloatingObjectProps {
  position: [number, number, number];
  color: string;
  speed: number;
  shape: 'sphere' | 'box' | 'torus';
}

const FloatingObject: React.FC<FloatingObjectProps> = ({ position, color, speed, shape }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    try {
      mesh.rotation.x += speed;
      mesh.rotation.y += speed * 0.7;
      mesh.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    } catch (error) {
      console.warn('Animation error in FloatingObject:', error);
    }
  });

  const material = <meshStandardMaterial color={color} transparent opacity={0.6} />;
  
  switch (shape) {
    case 'sphere':
      return <Sphere ref={meshRef} position={position} args={[0.8, 16, 16]}>{material}</Sphere>;
    case 'box':
      return <Box ref={meshRef} position={position} args={[1, 1, 1]}>{material}</Box>;
    case 'torus':
      return <Torus ref={meshRef} position={position} args={[0.8, 0.3, 8, 16]}>{material}</Torus>;
    default:
      return <Sphere ref={meshRef} position={position} args={[0.8, 16, 16]}>{material}</Sphere>;
  }
};

// Define the color palette for El Orquideario
const orquidearioColors = {
  lightTheme: {
    primary: "#22c55e",    // leaf-500
    secondary: "#a366ff",  // orchid-500
    accent: "#ec4899",     // petal-500
    highlight: "#16a34a"   // leaf-600
  },
  darkTheme: {
    primary: "#4ade80",    // leaf-400
    secondary: "#bf95ff",  // orchid-400
    accent: "#f472b6",     // petal-400
    highlight: "#22c55e"   // leaf-500
  }
};

const Scene3D: React.FC = () => {
  // Detectar el tema actual (light/dark)
  const [isDarkMode, setIsDarkMode] = React.useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [isRendered, setIsRendered] = React.useState(false);
  
  React.useEffect(() => {
    setIsRendered(true);
    
    // Escuchar cambios en el tema del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        setIsRendered(false);
      };
    }
  }, []);
  
  // Elegir la paleta de colores según el tema
  const colors = isDarkMode ? orquidearioColors.darkTheme : orquidearioColors.lightTheme;
  
  return (
    <>
      {/* Iluminación mejorada */}
      <ambientLight intensity={isDarkMode ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 0.8 : 1} color={isDarkMode ? "#aaccff" : "#ffffff"} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color={isDarkMode ? "#88aaff" : "#ffffee"} />
      
      {/* Objetos flotantes con los colores de El Orquideario */}
      <FloatingObject position={[4, 2, -5]} color={colors.primary} speed={0.01} shape="sphere" />
      <FloatingObject position={[-4, -1, -3]} color={colors.secondary} speed={0.015} shape="torus" />
      <FloatingObject position={[2, -3, -4]} color={colors.accent} speed={0.008} shape="box" />
      <FloatingObject position={[-2, 2, -6]} color={colors.highlight} speed={0.012} shape="sphere" />
      
      {isRendered && (
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          enableDamping={false}
        />
      )}
    </>
  );
};

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.warn('3D Scene Error:', event.error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div className="w-full h-full bg-transparent"></div>;
  }

  return <>{children}</>;
};

interface Background3DProps {
  className?: string;
}

import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';

// Hook personalizado para detectar cambios de tema que integra con el sistema de la aplicación
const useAppThemeDetector = () => {
  const { resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState(resolvedTheme === 'dark');
  
  React.useEffect(() => {
    // Actualizar basado en el tema resuelto del sistema de la aplicación
    setIsDarkTheme(resolvedTheme === 'dark');
    
    // Observar también cambios directos en la clase 'dark' del elemento HTML
    const checkForDarkClass = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkTheme(isDark);
    };
    
    const observer = new MutationObserver(checkForDarkClass);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      observer.disconnect();
    };
  }, [resolvedTheme]);
  
  return isDarkTheme;
};

export const Background3D: React.FC<Background3DProps> = ({ className = '' }) => {
  const [canvasError, setCanvasError] = React.useState(false);
  const isDarkTheme = useAppThemeDetector();
  const { currentLanguage } = useLanguage();
  
  // Paleta de colores para gradientes basados en la identidad de El Orquideario
  const orquidearioGradient = {
    light: {
      bgFrom: "from-[#e6f5eb]/40",
      bgTo: "to-[#d0f0e4]/40",
      blob1From: "from-[#0e5135]/15",
      blob1To: "to-[#227151]/15",
      blob2From: "from-[#66be99]/20",
      blob2To: "to-[#227151]/10",
      blob3From: "from-[#0e5135]/10",
      blob3To: "to-[#66be99]/10"
    },
    dark: {
      bgFrom: "from-[#0c3d27]/40",
      bgTo: "to-[#1a5c3e]/40",
      blob1From: "from-[#1a8858]/10",
      blob1To: "to-[#2b634c]/10",
      blob2From: "from-[#56a57d]/15",
      blob2To: "to-[#195c3e]/10",
      blob3From: "from-[#1a8858]/10",
      blob3To: "to-[#56a57d]/10"
    }
  };
  
  // El contenido de fallback ahora utiliza la paleta de El Orquideario
  const colors = isDarkTheme ? orquidearioGradient.dark : orquidearioGradient.light;
  
  const fallbackContent = (
    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgFrom} ${colors.bgTo} transition-colors duration-500`}>
      {/* Formas orgánicas reminiscentes de orquídeas */}
      <div className={`absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br ${colors.blob1From} ${colors.blob1To} rounded-full blur-3xl animate-float-slow transition-colors duration-500`}></div>
      <div className={`absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br ${colors.blob2From} ${colors.blob2To} rounded-full blur-3xl animate-float-slow transition-colors duration-500`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br ${colors.blob3From} ${colors.blob3To} rounded-full blur-3xl animate-float-slow transition-colors duration-500`} style={{ animationDelay: '3s' }}></div>
      
      {/* Patrón de cuadrícula sutil que recuerda a un invernadero */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '45px 45px'
          }}>
      </div>
      
      {/* Sutil indicación de que estamos en modo fallback */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400 opacity-50">
        {currentLanguage.code === 'es' ? 'Modo simplificado' : 'Simplified mode'}
      </div>
    </div>
  );
  
  // Detección de capacidades del navegador para optimizar la experiencia 3D
  React.useEffect(() => {
    // Verificar si WebGL está disponible y configurado correctamente
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setCanvasError(true);
      }
    } catch (e) {
      setCanvasError(true);
    }
    
    // También verificar si el dispositivo es de baja potencia
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      // Dispositivos con pocos núcleos pueden tener problemas con Three.js
      setCanvasError(true);
    }
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      {!canvasError ? (
        <ThreeJSErrorBoundary fallback={fallbackContent}>
          <Canvas 
            camera={{ 
              position: [0, 0, 5], 
              fov: 50, // FOV más bajo para mejor rendimiento y estética
              near: 0.1,
              far: 1000
            }}
            gl={{ 
              antialias: true,
              alpha: true,
              powerPreference: "default",
              failIfMajorPerformanceCaveat: true,
              depth: true,
              stencil: false, // Desactivar stencil buffer si no se necesita
              premultipliedAlpha: false // Mejor para transparencias
            }}
            onCreated={({ gl, scene }) => {
              gl.setClearColor(0x000000, 0);
              
              // Optimizaciones para mejor rendimiento
              gl.getContextAttributes().premultipliedAlpha = false;
              
              // Ajustar iluminación de la escena según el tema
              if (isDarkTheme) {
                scene.fog = new THREE.FogExp2(0x000000, 0.005);
              } else {
                scene.fog = null;
              }
            }}
            onError={() => setCanvasError(true)}
            dpr={Math.min(1.5, window.devicePixelRatio)} // DPR más conservador para mejor rendimiento
            flat
            frameloop="demand" // Solo renderizar cuando sea necesario
            style={{ opacity: isDarkTheme ? 0.7 : 0.8 }} 
            className={`transition-opacity duration-500`}
            performance={{ min: 0.5 }} // Performance mínimo aceptable
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </ThreeJSErrorBoundary>
      ) : fallbackContent}
    </div>
  );
};

// Export the Background3D component as the default export as well
export default Background3D;
