import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center, Environment } from '@react-three/drei'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import './Hero3D.css'

function FloatingGeometry() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh position={[3, 0, -2]}>
        <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
        <meshPhysicalMaterial
          color="#8B9BB4"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingGeometry />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
      />
      <Environment preset="city" />
    </>
  )
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <section className="hero-3d">
      {/* Shader Gradient Background */}
      <div className="shader-bg">
        {mounted && (
          <ShaderGradientCanvas
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <ShaderGradient
              control="query"
              urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%238B9BB4&color2=%23C9A84C&color3=%238B2500&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=sphere&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=2.4&uTime=0&wireframe=false"
            />
          </ShaderGradientCanvas>
        )}
      </div>

      {/* 3D Canvas with Floating Objects */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-label" variants={itemVariants}>
          <span className="dot"></span>
          Available for freelance
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="line">
            <span>PRAJWAL</span>
          </span>
          <span className="line">
            <span className="italic">KARTHIKEYA</span>
          </span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          AI × Cinema × Code
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          Building the <em>future of storytelling</em> through{' '}
          <em>artificial intelligence</em> and <em>cinematic experiences</em>.
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>

      <div className="grain"></div>
    </section>
  )
}
