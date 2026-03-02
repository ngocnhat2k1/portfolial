'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ============================================================
   3D Scene cho Intro Screen – Stable Version
   KHÔNG dùng drei components (Float, Environment) để tránh
   re-render gây mất objects. Tự implement animations.
   ============================================================ */

/* --- Wireframe Sphere – 2 layers xoay ngược nhau --- */
const WireframeSphere = () => {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.08
      outerRef.current.rotation.y = t * 0.12
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.06
      innerRef.current.rotation.y = t * 0.09
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.04
      // Pulse nhẹ
      const s = 1.4 + Math.sin(t * 0.5) * 0.05
      glowRef.current.scale.setScalar(s)
    }
    // Float effect thủ công
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Layer 1: Wireframe icosahedron lớn */}
      <mesh ref={outerRef} scale={2.2}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color="#1D7874"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Layer 2: Wireframe icosahedron nhỏ hơn */}
      <mesh ref={innerRef} scale={1.85}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#48CAE4"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Layer 3: Inner glow sphere */}
      <mesh ref={glowRef} scale={1.4}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#1D7874"
          emissive="#1D7874"
          emissiveIntensity={0.7}
          transparent
          opacity={0.3}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* Layer 4: Bright core */}
      <mesh ref={coreRef} scale={0.25}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </mesh>
    </group>
  )
}

/* --- Orbiting Rings --- */
const OrbitingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.25
      ring1Ref.current.rotation.y = t * 0.1
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI / 2.5 + t * 0.18
      ring2Ref.current.rotation.z = t * 0.22
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = 0.3
      ring3Ref.current.rotation.y = Math.PI / 3 + t * 0.3
      ring3Ref.current.rotation.z = Math.PI / 5 + t * 0.12
    }
  })

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.2, 0.04, 24, 200]} />
        <meshBasicMaterial color="#679289" transparent opacity={0.75} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.6, 0.03, 24, 200]} />
        <meshBasicMaterial color="#F4C095" transparent opacity={0.55} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[4.0, 0.025, 24, 200]} />
        <meshBasicMaterial color="#48CAE4" transparent opacity={0.45} />
      </mesh>
    </>
  )
}

/* --- Satellites – orbiting spheres --- */
const Satellites = () => {
  const groupRef = useRef<THREE.Group>(null)
  const colors = [
    '#1D7874',
    '#679289',
    '#F4C095',
    '#48CAE4',
    '#ffffff',
    '#9333ea',
  ]

  // Tạo vị trí ban đầu
  const positions = useMemo(() => {
    return colors.map((_, i) => {
      const angle = (i / colors.length) * Math.PI * 2
      const radius = 4.8 + i * 0.3
      const y = Math.sin(angle * 3) * 1.2
      return {
        x: Math.cos(angle) * radius,
        y,
        z: Math.sin(angle) * radius,
      }
    })
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12
    }
  })

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <group key={i} position={[pos.x, pos.y, pos.z]}>
          {/* Satellite body */}
          <mesh scale={0.08 + i * 0.02}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color={colors[i]} />
          </mesh>
          {/* Glow halo */}
          <mesh scale={0.2 + i * 0.04}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color={colors[i]} transparent opacity={0.12} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/* --- Floating Particles --- */
const FloatingDots = () => {
  const pointsRef = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 4.0 + Math.random() * 3.0

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.02) * 0.1
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

/* --- Fallback khi WebGL không hỗ trợ --- */
const WebGLFallback = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      inset: 0,
    }}
  >
    <div
      style={{
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 35% 35%, #1D7874, #0d4744 50%, transparent 70%)',
        boxShadow:
          '0 0 80px rgba(29, 120, 116, 0.3), inset 0 0 40px rgba(29, 120, 116, 0.2)',
      }}
    />
  </div>
)

/* --- Main 3D Scene --- */
const IntroModel = () => {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      if (!gl) setHasError(true)
    } catch {
      setHasError(true)
    }
  }, [])

  if (hasError) return <WebGLFallback />

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault()
            setHasError(true)
          })
        }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting đơn giản, ổn định */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-4, 3, 5]} intensity={1.5} color="#1D7874" />
        <pointLight position={[4, -2, -5]} intensity={1} color="#F4C095" />

        {/* Scene objects – KHÔNG dùng drei ngoài Canvas */}
        <WireframeSphere />
        <OrbitingRings />
        <Satellites />
        <FloatingDots />
      </Canvas>
    </div>
  )
}

export default IntroModel
