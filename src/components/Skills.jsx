import { motion } from 'framer-motion'
import { SKILLS, SKILL_CATEGORY_ICONS } from '../data/constants'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.08, y: -4 }}
      className="skill-badge text-text-secondary hover:text-text-primary cursor-default relative group"
    >
      {skill.name}
      {/* Glow on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5" />
    </motion.div>
  )
}

function CategorySection({ category, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 hover:border-primary/20 transition-colors duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{SKILL_CATEGORY_ICONS[category]}</span>
        <div>
          <h3 className="text-text-primary font-bold text-lg">{category}</h3>
          <p className="text-text-muted text-xs">{skills.length} skills</p>
        </div>
      </div>

      {/* Skills badges */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            What I work with
          </p>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-xl mx-auto">
            A curated set of technologies I've mastered through real projects, competitive programming, and self-driven learning.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <CategorySection
              key={category}
              category={category}
              skills={skills}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-text-muted text-sm mt-10"
        >
          Always learning. Always building. 🚀
        </motion.p>
      </div>
    </section>
  )
}
