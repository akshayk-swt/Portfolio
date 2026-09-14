import { GraduationCap, TestTube2, MapPin } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section bg-off-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="About Me"
            title="A Detail-Oriented QA Engineer"
            description="I believe software quality isn't an afterthought — it's built in from the very first requirement."
          />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left: Intro ── */}
          <ScrollAnimation delay={100}>
            <div className="space-y-5 text-dark-text/80 leading-relaxed text-base">
              <p>
                I&apos;m <strong className="text-dark-text font-semibold">Akshay K</strong>, a
                Software Tester / QA Engineer with a genuine passion for software quality. I find
                satisfaction in uncovering the edge cases that others miss and in making sure that
                what users experience is reliable, consistent, and frustration-free.
              </p>
              <p>
                My experience centres around <strong className="text-dark-text font-semibold">
                manual testing</strong> — writing structured test cases, executing them
                systematically, and reporting defects clearly so development teams can act on them
                quickly. I understand the SDLC and STLC end-to-end and how QA fits into each phase.
              </p>
              <p>
                I&apos;m currently developing my <strong className="text-dark-text font-semibold">
                automation testing</strong> skills, learning Java and test automation frameworks to
                complement my manual testing foundation. I&apos;m looking for an opportunity where I
                can apply what I know, keep learning, and contribute meaningfully to product quality.
              </p>

              {/* Trait pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Detail-Oriented',
                  'Curious Mind',
                  'Fast Learner',
                  'Team Player',
                  'Quality-First',
                ].map((trait) => (
                  <span
                    key={trait}
                    className="text-xs font-semibold bg-soft-mint text-forest-green px-3 py-1.5 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* ── Right: Info cards ── */}
          <ScrollAnimation delay={200}>
            <div className="space-y-5">

              {/* Education card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-mint flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={20} className="text-forest-green" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-1">Education</p>
                    <h3 className="font-bold text-dark-text text-base">Bachelor of Commerce (BCom)</h3>
                    <p className="text-sm text-dark-text/60 mt-0.5">University of Calicut</p>
                    <span className="inline-block mt-2 text-xs bg-soft-mint text-forest-green font-semibold px-2.5 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Specialisation card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-mint flex items-center justify-center flex-shrink-0">
                    <TestTube2 size={20} className="text-forest-green" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-1">Specialisation</p>
                    <h3 className="font-bold text-dark-text text-base">Software Testing & QA</h3>
                    <p className="text-sm text-dark-text/60 mt-0.5 leading-relaxed">
                      Manual testing · Test case design · Bug reporting · STLC
                    </p>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-mint flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-forest-green" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-mint uppercase tracking-widest mb-1">Location</p>
                    <h3 className="font-bold text-dark-text text-base">Kerala, India</h3>
                    <p className="text-sm text-dark-text/60 mt-0.5">Open to remote opportunities</p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
