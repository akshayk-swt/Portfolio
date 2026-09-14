import { Bot, Code2, Layers, Sparkles } from 'lucide-react'
import { currentlyLearning } from '@/data/profile'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'
import type { LucideProps } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Bot,
  Code2,
  Layers,
}

export default function CurrentlyLearning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="section bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Currently Learning"
            title="Always Growing"
            description="These are skills I'm actively developing — not yet part of my confirmed skillset, but very much in progress."
          />
        </ScrollAnimation>

        {/* Distinct visual treatment — soft mint band */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-soft-mint/50 to-soft-mint/20 border border-mint/20 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles size={18} className="text-mint" aria-hidden="true" />
              <p className="text-sm font-semibold text-forest-green">
                In active development — not listed as confirmed skills
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {currentlyLearning.map((item, index) => {
                const Icon = iconMap[item.icon] ?? Bot
                return (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <article className="bg-white border border-mint/20 rounded-2xl p-6 hover:border-mint/50 hover:shadow-card transition-all duration-300 group">
                      {/* Progress indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-soft-mint group-hover:bg-mint/20 flex items-center justify-center transition-colors duration-300">
                          <Icon size={20} className="text-forest-green" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold text-mint bg-soft-mint px-2 py-1 rounded-full">
                          Learning
                        </span>
                      </div>

                      <h3 className="font-bold text-dark-text text-base mb-2">{item.topic}</h3>
                      <p className="text-sm text-dark-text/55 leading-relaxed">{item.note}</p>

                      {/* Progress bar — visual only */}
                      <div className="mt-4" aria-hidden="true">
                        <div className="h-1 bg-soft-mint rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-mint to-forest-green rounded-full"
                            style={{ width: index === 0 ? '45%' : index === 1 ? '30%' : '35%' }}
                          />
                        </div>
                        <p className="text-xs text-dark-text/40 mt-1">In progress</p>
                      </div>
                    </article>
                  </ScrollAnimation>
                )
              })}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
