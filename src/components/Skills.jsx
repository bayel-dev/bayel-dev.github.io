import { motion } from 'framer-motion'
import { Code2, Smartphone, Wrench, Terminal } from 'lucide-react'
import { SKILLS_DATA } from '../data/constants'

const categoryIcons = {
  Frontend: Code2,
  Mobile: Smartphone,
  Tools: Wrench,
  Languages: Terminal,
}

const categoryColors = {
  Frontend: 'from-purple-500 to-blue-500',
  Mobile: 'from-blue-500 to-cyan-500',
  Tools: 'from-cyan-500 to-teal-500',
  Languages: 'from-pink-500 to-purple-500',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

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
            Skills &amp; Technologies
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => {
            const Icon = categoryIcons[category]
            const gradient = categoryColors[category]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-20`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                    {category}
                  </h3>
                </div>

                {/* Skills Badges */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 12px rgba(124, 58, 237, 0.4)',
                      }}
                      className="px-3 py-1.5 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg cursor-default hover:border-purple-500/50 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
