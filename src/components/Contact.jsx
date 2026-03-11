import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { PERSONAL_INFO } from '../data/constants'

const contactLinks = [
  {
    label: 'Email',
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'GitHub',
    href: PERSONAL_INFO.github,
    icon: Github,
    color: 'from-gray-500 to-gray-700',
  },
  {
    label: 'LinkedIn',
    href: PERSONAL_INFO.linkedin,
    icon: Linkedin,
    color: 'from-blue-500 to-blue-700',
  },
  {
    label: 'Telegram',
    href: PERSONAL_INFO.telegram,
    icon: Send,
    color: 'from-cyan-500 to-blue-500',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Decorative orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/60 text-lg mb-12"
        >
          I'm always open to new opportunities and interesting projects. <br className="hidden sm:block" />
          Let's build something great together.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {contactLinks.map(({ label, href, icon: Icon, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card glow-border p-5 flex flex-col items-center gap-3 hover:border-purple-500/30 transition-colors duration-300"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-20`}>
                <Icon size={22} className="text-white" />
              </div>
              <span className="text-sm font-medium text-white/70">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
