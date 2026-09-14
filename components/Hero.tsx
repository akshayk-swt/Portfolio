import Image from 'next/image'
import { Download, ArrowRight, CheckSquare, Terminal } from 'lucide-react'
import { personal } from '@/data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — introduction"
      className="relative min-h-screen bg-deep-forest flex items-center overflow-hidden pt-16"
    >
      {/* Subtle background accents — faint grid + QA motif */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(94,234,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* QA accent element — top right */}
      <div
        className="absolute top-24 right-6 md:right-16 opacity-[0.07] text-mint select-none pointer-events-none"
        aria-hidden="true"
      >
        <Terminal size={120} strokeWidth={1} />
      </div>

      {/* QA checklist accent — bottom left */}
      <div
        className="absolute bottom-16 left-6 md:left-16 opacity-[0.06] text-mint select-none pointer-events-none"
        aria-hidden="true"
      >
        <CheckSquare size={96} strokeWidth={1} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 text-mint text-sm font-semibold tracking-widest uppercase mb-5 opacity-0 animate-[fadeUp_0.5s_ease_0.1s_forwards]">
              <span className="w-6 h-px bg-mint inline-block" aria-hidden="true" />
              Software Tester / QA Engineer
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-off-white leading-tight tracking-tight mb-6 opacity-0 animate-[fadeUp_0.55s_ease_0.2s_forwards]">
              Hi, I&apos;m{' '}
              <span className="text-mint">Akshay K</span>
            </h1>

            {/* Tagline */}
            <p className="text-soft-mint/75 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 opacity-0 animate-[fadeUp_0.55s_ease_0.35s_forwards]">
              {personal.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-[fadeUp_0.55s_ease_0.5s_forwards]">
              <a
                href="#projects"
                aria-label="View my projects"
                className="inline-flex items-center justify-center gap-2 bg-mint text-deep-forest font-semibold px-7 py-3.5 rounded-xl hover:bg-soft-mint transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-mint/30 group"
              >
                View My Projects
                <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={personal.resumePath}
                download
                aria-label="Download my resume PDF"
                className="inline-flex items-center justify-center gap-2 border-2 border-mint/60 text-mint font-semibold px-7 py-3.5 rounded-xl hover:border-mint hover:bg-mint/10 transition-all duration-200 hover:-translate-y-1"
              >
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-14 opacity-0 animate-[fadeUp_0.55s_ease_0.65s_forwards]">
              {[
                { value: '3+', label: 'Projects Tested' },
                { value: '9+', label: 'Skills' },
                { value: 'BCom', label: 'Graduate' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-mint">{stat.value}</p>
                  <p className="text-sm text-soft-mint/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Profile image ── */}
          <div className="flex-shrink-0 opacity-0 animate-[fadeUp_0.6s_ease_0.3s_forwards]">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-mint/30 scale-105"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 rounded-full border border-mint/15 scale-110"
                aria-hidden="true"
              />

              {/* Image wrapper */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-forest-green border-4 border-mint/20 shadow-2xl shadow-black/40">
                <Image
                  src={personal.profileImage}
                  alt="Profile photo of Akshay K"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                />
                {/* Replace profile-placeholder.svg with your actual photo.
                    Update the path in data/profile.ts → personal.profileImage */}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-soft-mint/40 opacity-0 animate-[fadeUp_0.5s_ease_1s_forwards]"
        aria-hidden="true"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-soft-mint/40 to-transparent" />
      </div>
    </section>
  )
}
