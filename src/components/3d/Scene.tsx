import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import { Suspense, memo } from 'react'
import { useStage } from '@/store/useAppStore'
import * as THREE from 'three'

/** Lights that react to stage (cheap but effective) */
const Lights = memo(function Lights() {
  const stage = useStage()
  const color =
    stage === 'data' ? new THREE.Color('#4FBCC5') :
    stage === 'model' ? new THREE.Color('#FDDB19') :
    new THREE.Color('#8DE56C')

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight castShadow position={[3, 5, 2]} intensity={1.1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-2, 1.6, 1]} intensity={0.6} color={color} />
    </>
  )
})

/** Placeholder ‘desk plate’ so the scene doesn’t look empty */
const Ground = memo(function Ground() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#0e0e0f" roughness={1} />
    </mesh>
  )
})

export default function Scene() {
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [2.6, 1.8, 2.6], fov: 45 }}
    >
      <color attach="background" args={['#0c0d10']} />
      {/* Low-cost HDRI tint */}
      <Environment preset="city" environmentIntensity={0.2} />
      <Suspense fallback={null}>
        <Lights />
        <Ground />
        <ContactShadows position={[0, 0.001, 0]} blur={2.5} opacity={0.45} scale={10} />
      </Suspense>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={2.2} maxDistance={5} />
    </Canvas>
  )
}
