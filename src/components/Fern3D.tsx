
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Vector3 } from 'three';

interface FernProps {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

export const Fern3D: React.FC<FernProps> = ({ 
  position, 
  scale = 1, 
  rotation = [0, 0, 0] 
}) => {
  const fernRef = useRef<Group>(null);

  // Gentle swaying animation
  useFrame((state) => {
    if (fernRef.current) {
      fernRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      fernRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  // Generate fern fronds
  const fronds = useMemo(() => {
    const frondArray = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const height = 0.5 + Math.random() * 0.3;
      frondArray.push({
        angle,
        height,
        segments: 12 + Math.floor(Math.random() * 8)
      });
    }
    return frondArray;
  }, []);

  return (
    <group ref={fernRef} position={position} scale={scale} rotation={rotation}>
      {/* Fern base/stem */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.04, 0.3, 8]} />
        <meshStandardMaterial color="#2d4a2d" />
      </mesh>
      
      {/* Fern fronds */}
      {fronds.map((frond, index) => (
        <group key={index} rotation={[0, frond.angle, 0]}>
          {/* Main frond stem */}
          <mesh position={[0, frond.height / 2, 0]}>
            <cylinderGeometry args={[0.005, 0.01, frond.height, 6]} />
            <meshStandardMaterial color="#1a331a" />
          </mesh>
          
          {/* Frond segments */}
          {Array.from({ length: frond.segments }).map((_, segIndex) => {
            const segmentHeight = (segIndex / frond.segments) * frond.height;
            const segmentSize = (1 - segIndex / frond.segments) * 0.08;
            const segmentAngle = Math.sin(segIndex * 0.5) * 0.3;
            
            return (
              <group key={segIndex}>
                {/* Left leaflet */}
                <mesh 
                  position={[-segmentSize, segmentHeight, 0]}
                  rotation={[0, 0, segmentAngle]}
                >
                  <planeGeometry args={[segmentSize * 2, segmentSize * 0.5]} />
                  <meshStandardMaterial 
                    color="#228B22" 
                    side={2}
                    transparent
                    opacity={0.9}
                  />
                </mesh>
                
                {/* Right leaflet */}
                <mesh 
                  position={[segmentSize, segmentHeight, 0]}
                  rotation={[0, 0, -segmentAngle]}
                >
                  <planeGeometry args={[segmentSize * 2, segmentSize * 0.5]} />
                  <meshStandardMaterial 
                    color="#228B22" 
                    side={2}
                    transparent
                    opacity={0.9}
                  />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}
    </group>
  );
};
