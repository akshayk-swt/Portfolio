'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Linkedin, Github, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { personal } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Build formatted WhatsApp message
    const waText = encodeURIComponent(
      `Hi Akshay,\n\nMy name is ${name} (${email}).\n\nMessage:\n${message}`
    )
    const waUrl = `https://wa.me/${personal.whatsapp}?text=${waText}`

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank')

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const contactLinks = [
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: personal.whatsapp,
      href: `https://wa.me/${personal.whatsapp}`,
      display: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      display: personal.email,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personal.linkedin,
      href: personal.linkedin,
      display: personal.linkedin.replace('https://www.', '').replace('https://', ''),
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personal.github,
      href: personal.github,
      display: personal.github.replace('https://', ''),
    },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section bg-off-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Talk"
            description="Have an opportunity, a question, or just want to say hi? I'd love to hear from you."
          />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── Contact links ── */}
          <ScrollAnimation delay={100}>
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={`${label}: ${display}`}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:border-mint/30 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-soft-mint group-hover:bg-mint/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={20} className="text-forest-green" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-dark-text/80 group-hover:text-forest-green transition-colors">{display}</p>
                  </div>
                </a>
              ))}

              <div className="mt-6 p-5 bg-soft-mint/30 border border-mint/20 rounded-2xl">
                <p className="text-sm text-dark-text/70 leading-relaxed">
                  <strong className="text-dark-text">Note:</strong> Update your WhatsApp number, email, LinkedIn, and
                  GitHub links in{' '}
                  <code className="text-forest-green bg-soft-mint px-1.5 py-0.5 rounded text-xs font-mono">
                    data/profile.ts
                  </code>
                  .
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* ── Contact form ── */}
          <ScrollAnimation delay={200}>
            {submitted ? (
              <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-soft-mint flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-forest-green" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-2">WhatsApp Opened!</h3>
                <p className="text-sm text-dark-text/60">
                  Your message has been formatted and opened in WhatsApp chat.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-card space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-dark-text mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-text placeholder-dark-text/35 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-200 bg-off-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-dark-text mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-text placeholder-dark-text/35 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-200 bg-off-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-dark-text mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or just say hi..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-text placeholder-dark-text/35 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-200 bg-off-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Send via WhatsApp"
                  className="w-full inline-flex items-center justify-center gap-2 bg-mint text-deep-forest font-bold px-6 py-3.5 rounded-xl hover:bg-soft-mint transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-mint/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-deep-forest/30 border-t-deep-forest rounded-full animate-spin" aria-hidden="true" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageSquare size={16} aria-hidden="true" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
