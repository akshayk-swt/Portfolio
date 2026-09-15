import Image from 'next/image'
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import { projects, manualTestingProjects } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

interface ProjectItem {
  id: string
  name: string
  subtitle: string
  role?: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const hasLinks = project.liveUrl || project.githubUrl

  return (
    <article
      key={project.id}
      className="group bg-off-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project image */}
      <div className="relative h-48 bg-forest-green overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`Visual for ${project.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Accent gradient bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mint/80 to-soft-mint/60"
          aria-hidden="true"
        />
      </div>

      {/* Card content container */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Header row: Subtitle + Role badge */}
          <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
            <p className="text-xs font-semibold text-mint uppercase tracking-widest">
              {project.subtitle}
            </p>
            {project.role && (
              <span className="inline-flex items-center gap-1 bg-soft-mint text-forest-green text-xs font-bold px-2.5 py-0.5 rounded-full border border-mint/40">
                <CheckCircle2 size={12} className="text-forest-green flex-shrink-0" />
                Role: {project.role}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-dark-text">{project.name}</h3>
          <p className="text-sm text-dark-text/60 mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 my-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-soft-mint text-forest-green px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons / Footer aligned at bottom */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          {hasLinks ? (
            <div className="flex gap-3">
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
              ) : project.liveUrl === '#' ? (
                <span className="flex-1 inline-flex items-center justify-center gap-2 bg-soft-mint/50 text-forest-green/50 text-sm font-semibold px-4 py-2.5 rounded-xl cursor-default">
                  <ExternalLink size={14} aria-hidden="true" />
                  View Project
                </span>
              ) : null}

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
              ) : project.githubUrl === '#' ? (
                <span className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-dark-text/30 text-sm font-semibold px-4 py-2.5 rounded-xl cursor-default">
                  <Github size={14} aria-hidden="true" />
                  GitHub
                </span>
              ) : null}
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-dark-text/50 font-medium py-1">
              <span>Manual QA Verified</span>
              <span className="inline-flex items-center gap-1 text-forest-green font-semibold">
                <CheckCircle2 size={13} className="text-forest-green" /> Tested Project
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const allProjects = [...manualTestingProjects, ...projects]

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
            title="Developed & Tested Projects"
            description="Real-world projects highlighting quality assurance, manual testing, and software development."
          />
        </ScrollAnimation>

        <ScrollAnimation stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
