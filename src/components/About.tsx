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
            Architecting <span className="accent">intelligent systems</span> at the
            intersection of AI and engineering
          </motion.h2>

          <motion.p variants={itemVariants}>
            I'm an <strong>AI Engineer & Developer</strong> passionate about building 
            cutting-edge machine learning applications and intelligent solutions. My work 
            spans from deep learning research to scalable AI deployments.
          </motion.p>

          <motion.p variants={itemVariants}>
            With expertise in <strong>Python, PyTorch, and generative models</strong>, I
            create solutions that push the boundaries of what's possible. Currently exploring 
            the frontiers of <strong>LLMs, computer vision, and autonomous agents</strong>.
          </motion.p>

          <motion.div className="skills-grid" variants={itemVariants}>
            <div className="skill-category">
              <h4>Machine Learning</h4>
              <ul>
                <li>PyTorch & TensorFlow</li>
                <li>Computer Vision (YOLO)</li>
                <li>Transformers & LLMs</li>
                <li>Predictive Modeling</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Engineering</h4>
              <ul>
                <li>Python & C++</li>
                <li>FastAPI / Flask</li>
                <li>Data Pipelines</li>
                <li>Docker & Cloud</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Generative AI</h4>
              <ul>
                <li>LangChain & Agents</li>
                <li>Diffusion Models</li>
                <li>RAG Systems</li>
                <li>Model Fine-Tuning</li>
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
