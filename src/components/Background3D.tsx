
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
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const renderShape = () => {
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

  return renderShape();
};

const Scene3D: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <FloatingObject position={[4, 2, -5]} color="#38bdf8" speed={0.01} shape="sphere" />
      <FloatingObject position={[-4, -1, -3]} color="#e961ff" speed={0.015} shape="torus" />
      <FloatingObject position={[2, -3, -4]} color="#0ea5e9" speed={0.008} shape="box" />
      <FloatingObject position={[-3, 3, -6]} color="#d434ff" speed={0.012} shape="sphere" />
      <FloatingObject position={[5, -2, -2]} color="#38bdf8" speed={0.007} shape="torus" />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

interface Background3DProps {
  className?: string;
}

export const Background3D: React.FC<Background3DProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
    </div>
  );
};
