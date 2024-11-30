import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useArtifactStore } from '../store/artifactStore';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Scene() {
  const meshRef = useRef();
  const activeArtifact = useArtifactStore((state) => state.activeArtifact);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  if (!activeArtifact) return null;

  return (
    <mesh ref={meshRef}>
      {/* 3D visualization will be implemented here */}
    </mesh>
  );
}

export function Viewer3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}