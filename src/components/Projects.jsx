import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { PROJECTS_DATA } from '../data/constants'

const techColors = {
  React: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  MongoDB: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Tailwind CSS': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Arduino: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'C++': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Flutter: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  'Bluetooth LE': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Firebase: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Stripe API': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
}

const defaultTechColor = 'bg-white/5 text-white/60 border-white/10'

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

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
            Featured Projects
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.2)',
              }}
              className="glass-card p-6 flex flex-col gap-4 hover:border-purple-500/30 transition-colors duration-300"
            >
              {/* Project Number */}
              <span className="text-xs font-mono text-purple-400/60 tracking-widest">
                0{project.id}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">{project.title}</h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border ${
                      techColors[tech] || defaultTechColor
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
