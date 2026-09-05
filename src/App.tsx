import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(section)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navigation currentSection={currentSection} />
          <Hero3D />
          <About />
          <Projects />
          <Contact />
        </motion.div>
      )}
    </>
  )
}

export default App
