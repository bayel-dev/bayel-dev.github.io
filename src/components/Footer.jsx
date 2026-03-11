import { motion } from 'framer-motion'
import { Github, Linkedin, Send, ArrowUp, Heart } from 'lucide-react'
import { PERSONAL_INFO } from '../data/constants'

const SOCIAL_LINKS = [
  { icon: <Github size={18} />, href: PERSONAL_INFO.github, label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
  { icon: <Send size={18} />, href: PERSONAL_INFO.telegram, label: 'Telegram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-10 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-gradient">{PERSONAL_INFO.name.split(' ')[0]}.</span>
          <p className="text-text-muted text-sm mt-1">
            Built with React &{' '}
            <Heart size={12} className="inline text-accent-2 fill-accent-2" />{' '}
            — {new Date().getFullYear()}
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border-light text-text-muted hover:text-primary hover:border-primary/50 transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-colors"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  )
}
