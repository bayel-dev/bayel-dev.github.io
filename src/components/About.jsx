import { useState } from 'react'
import { motion } from 'framer-motion'
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/constants'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function About() {
  const [catClicked, setCatClicked] = useState(false)
  const [catEmojis, setCatEmojis] = useState([])

  const handleCatClick = () => {
    if (catClicked) return
    setCatClicked(true)
    const emojis = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
    }))
    setCatEmojis(emojis)
    setTimeout(() => {
      setCatEmojis([])
      setCatClicked(false)
    }, 3000)
  }

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cat emoji rain easter egg */}
      {catEmojis.map((e) => (
        <motion.span
          key={e.id}
          className="fixed text-3xl pointer-events-none z-50"
          style={{ left: `${e.x}%`, top: '-10%' }}
          animate={{ y: '120vh', opacity: [1, 1, 0] }}
          transition={{ duration: 2, delay: e.delay, ease: 'easeIn' }}
        >
          🐱
        </motion.span>
      ))}

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6"
          >
            {ABOUT_TEXT.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className={`text-text-secondary leading-relaxed text-base md:text-lg ${
                  paragraph.includes('🐱') ? 'cursor-pointer' : ''
                }`}
                onClick={paragraph.includes('🐱') ? handleCatClick : undefined}
                title={paragraph.includes('🐱') ? 'Click me! 🐱' : undefined}
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(
                    /🐱/g,
                    '<span class="cursor-pointer hover:scale-125 inline-block transition-transform" title="Click me!">🐱</span>'
                  ),
                }}
              />
            ))}

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-6"
              >
                GitHub Profile
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-outline text-sm py-2.5 px-6"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-4"
          >
            {ABOUT_TEXT.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group transition-all duration-300 hover:border-primary/30"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
                <div className="text-text-muted text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Extra decorative card */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-6 col-span-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-sm text-text-muted uppercase tracking-widest mb-2">Currently at</div>
                <div className="text-text-primary font-bold text-base">
                  🎓 Ala-Too International University
                </div>
                <div className="text-text-secondary text-sm mt-1">Bishkek, Kyrgyzstan • CS — 3rd Year</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
