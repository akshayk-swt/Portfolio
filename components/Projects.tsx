import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Projects"
            title="What I've Built & Tested"
            description="Real-world projects where I was involved in both development and quality assurance."
          />
        </ScrollAnimation>

        <ScrollAnimation stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-off-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Project image */}
                <div className="relative h-48 bg-forest-green overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Replace the .svg with your project screenshot (PNG/JPG).
                      Update paths in data/profile.ts → projects[n].image */}

                  {/* Accent gradient bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mint/80 to-soft-mint/60"
                    aria-hidden="true"
                  />
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-dark-text">{project.name}</h3>
                    <p className="text-sm text-dark-text/60 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-soft-mint text-forest-green px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live`}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-mint text-deep-forest text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-soft-mint transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        View Project
                      </a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-2 bg-soft-mint/50 text-forest-green/50 text-sm font-semibold px-4 py-2.5 rounded-xl cursor-default">
                        <ExternalLink size={14} aria-hidden="true" />
                        View Project
                      </span>
                    )}

                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                        className="inline-flex items-center justify-center gap-2 border-2 border-forest-green/20 text-forest-green text-sm font-semibold px-4 py-2.5 rounded-xl hover:border-mint hover:text-mint transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Github size={14} aria-hidden="true" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-dark-text/30 text-sm font-semibold px-4 py-2.5 rounded-xl cursor-default">
                        <Github size={14} aria-hidden="true" />
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
