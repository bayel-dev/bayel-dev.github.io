import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { PERSONAL_INFO } from '../data/constants'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const CONTACT_LINKS = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    description: 'Drop me a line',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: 'bayel-dev',
    href: PERSONAL_INFO.github,
    description: 'Check my code',
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'Manapov Bayel',
    href: PERSONAL_INFO.linkedin,
    description: 'Connect with me',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: <Send size={22} />,
    label: 'Telegram',
    value: PERSONAL_INFO.telegramHandle,
    href: PERSONAL_INFO.telegram,
    description: 'Message instantly',
    color: 'from-cyan-400 to-blue-500',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Get in touch
          </p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Whether it's a project, opportunity, or just a chat about tech — my inbox is always open.
          </p>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-14 text-center mb-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
          <div className="relative z-10">
            <div className="text-6xl mb-6">👋</div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Open to new opportunities
            </h3>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              I'm actively looking for frontend/React roles, internships, and freelance projects.
            </p>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-block text-base"
            >
              Send me an email
            </motion.a>
          </div>
        </motion.div>

        {/* Contact links grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {CONTACT_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                {link.icon}
              </div>
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wide mb-0.5">
                  {link.description}
                </div>
                <div className="text-text-primary font-semibold">{link.label}</div>
                <div className="text-text-secondary text-sm truncate">{link.value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
