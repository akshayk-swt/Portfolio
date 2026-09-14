import { Download, Mail } from 'lucide-react'
import { personal } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ResumeCTA() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-cta-heading"
      className="section bg-deep-forest relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(94,234,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-4">
            Open to Opportunities
          </p>

          <h2
            id="resume-cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-off-white leading-tight mb-5"
          >
            Looking for a Software Tester{' '}
            <span className="text-mint">/ QA opportunity?</span>
          </h2>

          <p className="text-soft-mint/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            I&apos;m actively seeking my first full-time QA role. Check out my resume or reach
            out directly — I&apos;d love to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={personal.resumePath}
              download
              aria-label="Download Akshay K's resume PDF"
              className="inline-flex items-center justify-center gap-2.5 bg-mint text-deep-forest font-bold px-8 py-4 rounded-xl hover:bg-soft-mint transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-mint/25 text-base"
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              aria-label="Go to contact section"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-mint/50 text-mint font-bold px-8 py-4 rounded-xl hover:border-mint hover:bg-mint/10 transition-all duration-200 hover:-translate-y-1 text-base"
            >
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
