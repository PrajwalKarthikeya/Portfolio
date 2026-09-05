import { motion } from 'framer-motion'
import './Navigation.css'

interface NavigationProps {
  currentSection: number
}

export default function Navigation({ currentSection }: NavigationProps) {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
    >
      <div className="nav-logo">
        <span>PK</span>
      </div>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={currentSection === index ? 'active' : ''}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <a href="/resume.pdf" className="nav-resume" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </motion.nav>
  )
}
