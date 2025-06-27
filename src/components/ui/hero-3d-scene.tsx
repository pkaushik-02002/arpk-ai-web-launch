
"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function FloatingElements() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  const group3 = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group1.current) {
      group1.current.rotation.y = state.clock.elapsedTime * 0.5;
      group1.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
    if (group2.current) {
      group2.current.rotation.z = state.clock.elapsedTime * 0.3;
      group2.current.position.x = Math.cos(state.clock.elapsedTime * 0.8) * 2;
    }
    if (group3.current) {
      group3.current.rotation.x = state.clock.elapsedTime * 0.4;
      group3.current.position.z = Math.sin(state.clock.elapsedTime * 0.6) * 1;
    }
  });

  return (
    <>
      <group ref={group1} position={[3, 1, -2]}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      <group ref={group2} position={[-3, -1, -1]}>
        <mesh>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
      
      <group ref={group3} position={[2, -2, 1]}>
        <mesh>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </>
  );
}

interface Hero3DSceneProps {
  className?: string;
}

export function Hero3DScene({ className }: Hero3DSceneProps) {
  return (
    <div className={`w-full h-[400px] md:h-[500px] lg:h-[600px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="w-full h-full"
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />
        
        <Environment preset="city" />
        
        <AnimatedSphere />
        <FloatingElements />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
