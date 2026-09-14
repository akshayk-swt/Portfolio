import { Mail, Linkedin, Github, Heart } from 'lucide-react'
import { personal, navLinks } from '@/data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personal.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personal.linkedin,
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personal.email}`,
    },
  ]

  return (
    <footer
      role="contentinfo"
      className="bg-deep-forest border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-off-white mb-1">{personal.name}</p>
            <p className="text-sm text-soft-mint/60">{personal.role}</p>
            <p className="text-sm text-soft-mint/45 mt-4 leading-relaxed max-w-xs">
              Dedicated to software quality, one test case at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-soft-mint/60 hover:text-mint transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={`${label} — ${personal.name}`}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-soft-mint/60 hover:text-mint hover:bg-mint/10 hover:border-mint/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-soft-mint/35">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={12} className="text-mint fill-mint" aria-hidden="true" /> and a strong attention to detail.
          </p>
        </div>
      </div>
    </footer>
  )
}
