import { motion } from 'framer-motion'
import { Github, Linkedin, Send, ArrowUp } from 'lucide-react'
import { PERSONAL_INFO } from '../data/constants'

const socials = [
  { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
  { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: PERSONAL_INFO.telegram, icon: Send, label: 'Telegram' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-white/40 text-sm text-center md:text-left">
          Built with React &amp; ❤️ by{' '}
          <span className="gradient-text font-medium">Manapov Bayel</span>
          {' '}© 2024
        </p>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#7c3aed' }}
              whileTap={{ scale: 0.95 }}
              className="text-white/40 hover:text-purple-400 transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Right: Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200"
        >
          <ArrowUp size={16} />
          Back to top
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
