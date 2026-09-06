import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Box, MeshWobbleMaterial } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

function WobbleBox() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <Box args={[1.5, 1.5, 1.5]}>
        <MeshWobbleMaterial
          color="#C9A84C"
          attach="material"
          factor={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Box>
    </Float>
  )
}

const projects = [
  {
    title: 'Wildfire Intelligence',
    category: 'Computer Vision',
    description: 'Real-time wildfire monitoring and intelligence system. Uses satellite data to track and analyze wildfire activity.',
    tech: ['Python', 'PyTorch', 'Computer Vision'],
    image: '/wildfire-intelligence.png',
    link: 'https://github.com/PrajwalKarthikeya/Wildfire-Intelligence'
  },
  {
    title: 'Enterprise Process Auditor',
    category: 'AI Agents',
    description: 'AI-driven system for analyzing and auditing business processes. Identifies inefficiencies, risks, and potential process improvements.',
    tech: ['Python', 'LLMs', 'LangChain'],
    link: 'https://github.com/PrajwalKarthikeya/Enterprise-Process-Auditor'
  },
  {
    title: 'Notion AI Script Engine',
    category: 'Generative AI',
    description: 'AI-powered engine for transforming ideas into structured scripts. Designed around automated content generation and organization.',
    tech: ['Python', 'OpenAI', 'Notion API'],
    link: 'https://github.com/PrajwalKarthikeya/Notion-AI-Script-Engine'
  },
  {
    title: 'Spotify Mood to Audio Persona',
    category: 'Machine Learning',
    description: 'A local LLM intent engine designed to map contextual human emotion to structured audio metadata.',
    tech: ['Python', 'NLP', 'Spotify API'],
    link: 'https://github.com/PrajwalKarthikeya/Spotify-Mood-to-Audio-Persona'
  },
  {
    title: 'deepfocus',
    category: 'Productivity',
    description: 'Focus application aimed at distraction-free deep work environments leveraging smart scheduling.',
    tech: ['TypeScript', 'React', 'Electron'],
    link: 'https://github.com/PrajwalKarthikeya/deepfocus'
  },
  {
    title: 'Bookshelf',
    category: 'Full Stack',
    description: 'Digital bookshelf for tracking reading progress and discovering new literature.',
    tech: ['JavaScript', 'React', 'Node.js'],
    link: 'https://github.com/PrajwalKarthikeya/Bookshelf'
  },
  {
    title: 'brewfully',
    category: 'Lifestyle',
    description: 'A coffee brewing companion built around recipes and discovery. Explore brewing methods and details behind each cup.',
    tech: ['JavaScript', 'React', 'Tailwind'],
    link: 'https://github.com/PrajwalKarthikeya/brewfully'
  },
  {
    title: 'Hydration Interval Planner',
    category: 'Health',
    description: 'Smart planner that schedules and tracks daily hydration needs based on individual intervals.',
    tech: ['JavaScript', 'React', 'CSS'],
    link: 'https://github.com/PrajwalKarthikeya/Hydration-Interval-Planner'
  },
  {
    title: 'FilmPass',
    category: 'Web App',
    description: 'Cinematic application for securing access and passes to independent film festivals.',
    tech: ['JavaScript', 'React', 'Firebase'],
    link: 'https://github.com/PrajwalKarthikeya/FilmPass'
  },
  {
    title: 'grain',
    category: 'Utility',
    description: 'Minimal rice cooker timer built for simple, distraction-free use. Supports cup-based timing and countdowns.',
    tech: ['JavaScript', 'React'],
    link: 'https://github.com/PrajwalKarthikeya/grain'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="line"></span>
            Featured Work
          </div>
          <h2>Selected Projects</h2>
          <p>A collection of recent work spanning AI, web, and creative tech</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-3d">
                    <Canvas camera={{ position: [0, 0, 3] }}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <WobbleBox />
                    </Canvas>
                  </div>
                )}
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="projects-bg-3d">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <Box args={[2, 2, 2]} position={[-3, 2, -5]}>
              <MeshWobbleMaterial
                color="#8B9BB4"
                factor={0.2}
                speed={1}
                transparent
                opacity={0.1}
              />
            </Box>
          </Float>
        </Canvas>
      </div>
    </section>
  )
}
