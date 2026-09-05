import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Torus, MeshDistortMaterial } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

function AnimatedTorus() {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Torus args={[1, 0.4, 32, 100]}>
        <MeshDistortMaterial
          color="#C9A84C"
          attach="material"
          distort={0.3}
          speed={1}
          roughness={0.1}
          metalness={0.9}
        />
      </Torus>
    </Float>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={itemVariants}>
            <span className="line"></span>
            Get In Touch
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Let's create something <span className="accent">extraordinary</span>
          </motion.h2>

          <motion.p className="contact-description" variants={itemVariants}>
            Whether you have a project in mind, need a consultation, or just
            want to connect — I'd love to hear from you.
          </motion.p>

          <motion.div className="contact-methods" variants={itemVariants}>
            <a href="mailto:your.email@example.com" className="contact-card">
              <div className="contact-icon">✉</div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>your.email@example.com</p>
              </div>
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">⚡</div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>@yourusername</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p>/in/yourprofile</p>
              </div>
            </a>

            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">🐦</div>
              <div className="contact-info">
                <h4>Twitter</h4>
                <p>@yourusername</p>
              </div>
            </a>
          </motion.div>

          <motion.div className="contact-cta" variants={itemVariants}>
            <a href="mailto:your.email@example.com" className="btn btn-primary">
              Send Message
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="contact-visual">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedTorus />
          </Canvas>
        </div>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>© 2026 Prajwal Karthikeya. Crafted with passion and Three.js</p>
      </motion.footer>
    </section>
  )
}
