import { GraduationCap, Award } from 'lucide-react'
import { education } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section bg-off-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Education"
            title="Academic Background"
          />
        </ScrollAnimation>

        <ScrollAnimation stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {education.map((edu, index) => (
              <article
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-soft-mint flex items-center justify-center mb-5">
                  <GraduationCap size={24} className="text-forest-green" aria-hidden="true" />
                </div>

                {/* Status badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-soft-mint text-forest-green px-2.5 py-1 rounded-full mb-3">
                  <Award size={11} aria-hidden="true" />
                  {edu.status}
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-text leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-base text-forest-green font-semibold">{edu.institution}</p>
                {edu.year && (
                  <p className="text-sm text-dark-text/50 mt-1">{edu.year}</p>
                )}

                {/* Decorative accent */}
                <div
                  className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2"
                  aria-hidden="true"
                >
                  <div className="h-1 w-8 bg-mint rounded-full" />
                  <div className="h-1 w-4 bg-soft-mint rounded-full" />
                  <div className="h-1 w-2 bg-soft-mint/50 rounded-full" />
                </div>
              </article>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
