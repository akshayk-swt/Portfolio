import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { experience } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section bg-off-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Experience"
            title="Where I've Worked"
            description="Hands-on experience from internship work in a professional testing environment."
          />
        </ScrollAnimation>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-mint/40 via-mint/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <ScrollAnimation key={index} delay={index * 80}>
                <article className="relative sm:pl-14">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3.5 top-6 w-3 h-3 rounded-full bg-mint border-2 border-off-white shadow-md shadow-mint/30 hidden sm:block"
                    aria-hidden="true"
                  />

                  <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold bg-soft-mint text-forest-green px-2.5 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-dark-text">{job.title}</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Briefcase size={14} className="text-mint" aria-hidden="true" />
                          <span className="text-base text-forest-green font-semibold">{job.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 text-sm text-dark-text/50">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} aria-hidden="true" />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} aria-hidden="true" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-5" />

                    {/* Bullet points */}
                    <ul className="space-y-3" role="list">
                      {job.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-mint flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-dark-text/75 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
