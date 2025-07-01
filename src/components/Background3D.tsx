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
<<<<<<< Updated upstream
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
=======
  const groupRef = useRef<THREE.Group>(null);
  const [pos, setPos] = React.useState(position);
  
  // Use a more efficient update with useRef to reduce state updates
  const positionRef = useRef(position);
  
  useFrame((state) => {
    if (groupRef.current) {
      try {
        groupRef.current.rotation.x += speed;
        groupRef.current.rotation.y += speed * 0.7;
        
        // Use reference for animation calculations to reduce re-renders
        const newY = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
        if (Math.abs(positionRef.current[1] - newY) > 0.01) {
          positionRef.current = [position[0], newY, position[2]];
          setPos(positionRef.current);
        }
      } catch (error) {
        console.warn('Animation error:', error);
      }
    }
  });

  // Custom shader material for a more subtle effect
  const materialProps = {
    color,
    transparent: true,
    opacity: 0.6,
    roughness: 0.4,
    metalness: 0.1,
    // Make the material react to theme changes
    emissive: color,
    emissiveIntensity: 0.15
  };
  
  return (
    <group ref={groupRef} position={pos}>
      {shape === 'sphere' && (
        <mesh>
          <sphereGeometry args={[0.8, 24, 24]} /> {/* Higher segments for smoother look */}
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      )}
      {shape === 'box' && (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      )}
      {shape === 'torus' && (
        <mesh>
          <torusGeometry args={[0.8, 0.3, 16, 32]} /> {/* Higher segments for smoother look */}
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      )}
    </group>
  );
};

// Definimos colores que van bien con el tema de El Orquideario
// Colores basados en la identidad visual del logo de El Orquideario
const orquidearioColors = {
  lightTheme: {
    primary: "#0e5135", // Verde oscuro principal del logo
    secondary: "#227151", // Verde medio para contraste
    accent: "#66be99", // Verde más claro para acentos
    highlight: "#d0f0e4" // Verde muy claro/mint para resaltar elementos
  },
  darkTheme: {
    primary: "#1a8858", // Verde más luminoso pero elegante para dark mode
    secondary: "#2b634c", // Verde oscuro que mantiene visibilidad
    accent: "#56a57d", // Verde medio con suficiente contraste
    highlight: "#195c3e" // Verde oscuro pero vibrante
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
      
      <FloatingObject position={[4, 2, -5]} color="#38bdf8" speed={0.008} shape="sphere" />
      <FloatingObject position={[-4, -1, -3]} color="#e961ff" speed={0.01} shape="torus" />
      <FloatingObject position={[2, -3, -4]} color="#0ea5e9" speed={0.006} shape="box" />
      <FloatingObject position={[-3, 3, -6]} color="#d434ff" speed={0.009} shape="sphere" />
      <FloatingObject position={[5, -2, -2]} color="#38bdf8" speed={0.005} shape="torus" />
=======
      {/* Iluminación mejorada */}
      <ambientLight intensity={isDarkMode ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 0.8 : 1} color={isDarkMode ? "#aaccff" : "#ffffff"} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color={isDarkMode ? "#88aaff" : "#ffffee"} />
      
      {/* Objetos flotantes con los colores de El Orquideario */}
      <FloatingObject position={[4, 2, -5]} color={colors.primary} speed={0.01} shape="sphere" />
      <FloatingObject position={[-4, -1, -3]} color={colors.secondary} speed={0.015} shape="torus" />
      <FloatingObject position={[2, -3, -4]} color={colors.accent} speed={0.008} shape="box" />
      <FloatingObject position={[-2, 2, -6]} color={colors.highlight} speed={0.012} shape="sphere" />
>>>>>>> Stashed changes
      
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
<<<<<<< Updated upstream
  const [webglSupported, setWebglSupported] = React.useState(true);

  React.useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported, falling back to 2D background');
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <div className={`absolute inset-0 ${className}`}></div>;
  }

  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <ErrorBoundary>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ 
            antialias: false,
            alpha: true,
            preserveDrawingBuffer: false,
            powerPreference: "default",
            failIfMajorPerformanceCaveat: true
          }}
          onCreated={({ gl, scene, camera }) => {
            try {
              gl.setClearColor(0x000000, 0);
              
              // Handle context lost
              const handleContextLost = (event: Event) => {
                event.preventDefault();
                console.warn('WebGL context lost, attempting recovery...');
              };
              
              const handleContextRestored = () => {
                console.log('WebGL context restored');
              };
              
              gl.domElement.addEventListener('webglcontextlost', handleContextLost);
              gl.domElement.addEventListener('webglcontextrestored', handleContextRestored);
            } catch (error) {
              console.warn('Canvas setup error:', error);
            }
          }}
          onError={(error) => {
            console.warn('Canvas error:', error);
            setWebglSupported(false);
          }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
=======
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
>>>>>>> Stashed changes
    </div>
  );
};

// Export the Background3D component as the default export as well
export default Background3D;
