
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Fern3D } from './Fern3D';

interface FernGardenProps {
  className?: string;
}

export const FernGarden: React.FC<FernGardenProps> = ({ className = '' }) => {
  // Generate random fern positions for a natural look
  const fernPositions: Array<[number, number, number]> = [
    [-3, -1, -2],
    [3, -1, -1],
    [-2, -1, 2],
    [2, -1, 3],
    [-4, -1, 0],
    [4, -1, -3],
    [0, -1, -4],
    [-1, -1, 4],
    [1, -1, -2],
    [-3, -1, 3],
  ];

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} color="#90EE90" />
          <directionalLight
            position={[5, 10, 5]}
            intensity={0.6}
            color="#ffffff"
            castShadow
          />
          <pointLight position={[-5, 5, -5]} intensity={0.3} color="#98FB98" />
          
          {/* Environment for realistic reflections */}
          <Environment preset="forest" />
          
          {/* Render ferns */}
          {fernPositions.map((position, index) => (
            <Fern3D
              key={index}
              position={position}
              scale={0.8 + Math.random() * 0.6}
              rotation={[0, Math.random() * Math.PI * 2, 0]}
            />
          ))}
          
          {/* Ground plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial 
              color="#2d4a2d" 
              transparent 
              opacity={0.3}
            />
          </mesh>
          
          {/* Subtle orbit controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
