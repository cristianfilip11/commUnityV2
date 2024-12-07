import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

const Globe = () => {
  return (
    <Canvas>
      {/* Adaugă o lumină pentru a ilumina scena */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Adaugă o sferă pentru a reprezenta globul */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="royalblue" />
      </Sphere>
      
      {/* Controlează mișcarea camerei */}
      <OrbitControls />
    </Canvas>
  );
};

export default Globe;
