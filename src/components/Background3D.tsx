
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

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

const Scene3D: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
      
      <FloatingObject position={[4, 2, -5]} color="#38bdf8" speed={0.008} shape="sphere" />
      <FloatingObject position={[-4, -1, -3]} color="#e961ff" speed={0.01} shape="torus" />
      <FloatingObject position={[2, -3, -4]} color="#0ea5e9" speed={0.006} shape="box" />
      <FloatingObject position={[-3, 3, -6]} color="#d434ff" speed={0.009} shape="sphere" />
      <FloatingObject position={[5, -2, -2]} color="#38bdf8" speed={0.005} shape="torus" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        enableDamping={false}
      />
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

export const Background3D: React.FC<Background3DProps> = ({ className = '' }) => {
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
    </div>
  );
};
