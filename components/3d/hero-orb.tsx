"use client";

import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function CoreScene() {
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.x = Math.sin(t * 0.45) * 0.18;
      core.current.rotation.y = t * 0.42;
      core.current.position.y = Math.sin(t * 0.8) * 0.14;
    }
    if (ringA.current) {
      ringA.current.rotation.z = t * 0.24;
      ringA.current.rotation.x = 1.05 + Math.sin(t * 0.3) * 0.08;
    }
    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.34;
      ringB.current.rotation.y = t * 0.16;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.35} />
      <spotLight position={[0, 5, 6]} angle={0.45} penumbra={0.9} intensity={52} color="#f6f3e8" />
      <pointLight position={[-4, 1.8, 3]} intensity={20} color="#c8ff3d" />
      <pointLight position={[4, -2.5, 3]} intensity={12} color="#76ffb2" />
      <Float speed={1.65} rotationIntensity={0.24} floatIntensity={0.85}>
        <mesh ref={core}>
          <dodecahedronGeometry args={[1.62, 5]} />
          <meshPhysicalMaterial color="#f6f3e8" emissive="#c8ff3d" emissiveIntensity={1.3} roughness={0.08} metalness={0.2} transmission={0.32} thickness={0.85} clearcoat={1} />
        </mesh>
        <mesh ref={ringA} rotation={[1.1, 0.2, -0.5]}>
          <torusGeometry args={[3.0, 0.012, 16, 220]} />
          <meshBasicMaterial color="#c8ff3d" transparent opacity={0.58} />
        </mesh>
        <mesh ref={ringB} rotation={[0.55, -0.25, 0.18]}>
          <torusGeometry args={[2.16, 0.016, 16, 220]} />
          <meshBasicMaterial color="#76ffb2" transparent opacity={0.48} />
        </mesh>
      </Float>
      <Sparkles count={150} scale={[8, 4.8, 5.4]} size={2.0} speed={0.28} color="#f6f3e8" opacity={0.5} />
    </group>
  );
}

export function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping }}
      dpr={[1, 1.35]}
      performance={{ min: 0.65 }}
    >
      <CoreScene />
    </Canvas>
  );
}
