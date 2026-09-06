import { motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <motion.div
        className="preloader-text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="vader-text">SYSTEM ONLINE</span>
        <span className="vader-sub">Powering up AI core...</span>
      </motion.div>
      <div className="lightsaber-hilt">
        <div className="hilts-details"></div>
        <motion.div
          className="lightsaber-blade"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          style={{ originY: 0 }}
        />
      </div>
    </motion.div>
  )
}
