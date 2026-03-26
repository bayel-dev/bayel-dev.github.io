import { useState } from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../data/constants'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const About = () => {
  const [catVisible, setCatVisible] = useState(false)

  return (
    <section id="about" className="relative py-24 px-6">
      {/* Subtle background orb */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
            {ABOUT_DATA.title}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {ABOUT_DATA.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-white/70 leading-relaxed text-base md:text-lg"
              >
                {para}
              </motion.p>
            ))}

            {/* Easter egg: cat paw */}
            <motion.div
              variants={itemVariants}
              className="relative inline-block mt-4"
            >
              <button
                onMouseEnter={() => setCatVisible(true)}
                onMouseLeave={() => setCatVisible(false)}
                className="text-white/30 hover:text-purple-400 transition-colors text-sm tracking-widest cursor-pointer select-none"
              >
                • • •
              </button>
              {catVisible && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl pointer-events-none"
                >
                  🐱
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {ABOUT_DATA.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card glow-border p-6 flex items-center gap-6"
              >
                <span className="text-5xl font-bold gradient-text">{stat.value}</span>
                <span className="text-white/60 text-base font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
