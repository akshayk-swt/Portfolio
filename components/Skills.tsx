import {
  ClipboardCheck,
  FileText,
  Play,
  Bug,
  CheckCircle2,
  RefreshCw,
  GitMerge,
  Repeat2,
  Bot,
  LucideProps,
} from 'lucide-react'
import { skills } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

// Map icon name strings → actual Lucide components
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  ClipboardCheck,
  FileText,
  Play,
  Bug,
  CheckCircle2,
  RefreshCw,
  GitMerge,
  Repeat2,
  Bot,
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Skills"
            title="What I Bring to the Table"
            description="A focused set of QA skills built through training and hands-on internship experience."
          />
        </ScrollAnimation>

        <ScrollAnimation stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => {
              const Icon = iconMap[skill.icon] ?? ClipboardCheck
              return (
                <article
                  key={skill.label}
                  className="group bg-off-white border border-gray-100 rounded-2xl p-6 hover:border-mint/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-soft-mint group-hover:bg-mint/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-forest-green"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-text text-base leading-snug">
                        {skill.label}
                      </h3>
                      <p className="text-sm text-dark-text/55 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
