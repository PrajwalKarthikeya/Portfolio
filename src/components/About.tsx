import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import './About.css'

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 100, 100]}>
        <MeshDistortMaterial
          color="#8B9BB4"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-grid">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={itemVariants}>
            <span className="line"></span>
            About Me
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Crafting <span className="accent">digital experiences</span> at the
            intersection of technology and art
          </motion.h2>

          <motion.p variants={itemVariants}>
            I'm a <strong>full-stack developer</strong> and{' '}
            <strong>AI researcher</strong> passionate about building immersive
            web experiences. My work spans from cinematic web design to
            cutting-edge machine learning applications.
          </motion.p>

          <motion.p variants={itemVariants}>
            With expertise in <strong>React, Three.js, and Python</strong>, I
            create solutions that merge technical excellence with creative
            vision. Currently exploring the frontiers of{' '}
            <strong>generative AI</strong> and{' '}
            <strong>real-time 3D rendering</strong>.
          </motion.p>

          <motion.div className="skills-grid" variants={itemVariants}>
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React / Next.js</li>
                <li>Three.js / R3F</li>
                <li>TypeScript</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>FastAPI</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>AI/ML</h4>
              <ul>
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>LangChain</li>
                <li>Computer Vision</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <div className="about-visual">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
