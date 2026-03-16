import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Scroll progress bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary-light origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}

// Elegant preloader
function Preloader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="text-5xl font-extrabold text-gradient mb-4"
        >
          B<span className="text-primary">.</span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
          className="h-0.5 w-32 mx-auto bg-gradient-to-r from-primary to-accent origin-left rounded-full"
        />
      </div>
    </motion.div>
  )
}

// Custom cursor glow
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] rounded-full mix-blend-screen"
      style={{
        width: clicking ? 48 : 32,
        height: clicking ? 48 : 32,
        background: 'radial-gradient(circle, rgba(108,99,255,0.6) 0%, transparent 70%)',
        filter: 'blur(8px)',
      }}
      animate={{
        x: pos.x - (clicking ? 24 : 16),
        y: pos.y - (clicking ? 24 : 16),
        opacity: visible ? 1 : 0,
        scale: clicking ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
    />
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {!show && <Preloader key="preloader" onComplete={() => {}} />}
      </AnimatePresence>

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background text-text-primary"
        >
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
