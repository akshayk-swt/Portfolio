'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, personal } from '@/data/profile'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-forest/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-deep-forest'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-off-white font-bold text-lg tracking-tight hover:text-mint transition-colors duration-200 focus-visible:outline-mint"
            aria-label="Akshay K — home"
          >
            Akshay K
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-off-white/80 hover:text-mint px-3 py-2 rounded-md transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personal.resumePath}
              download
              aria-label="Download Resume PDF"
              className="inline-flex items-center gap-2 bg-mint text-deep-forest text-sm font-semibold px-4 py-2 rounded-lg hover:bg-soft-mint transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-mint/30"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-off-white hover:text-mint p-2 rounded-md transition-colors duration-200"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-white/10 pb-4 animate-slide-down"
          >
            <ul role="list" className="flex flex-col mt-2 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-sm text-off-white/80 hover:text-mint hover:bg-white/5 px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={personal.resumePath}
              download
              onClick={handleNavClick}
              aria-label="Download Resume PDF"
              className="inline-flex items-center gap-2 mt-3 mx-4 bg-mint text-deep-forest text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-soft-mint transition-colors duration-200"
            >
              <Download size={15} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
