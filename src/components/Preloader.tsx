import { motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="preloader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading Experience
      </motion.div>
      <div className="preloader-bar">
        <motion.div
          className="preloader-fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
