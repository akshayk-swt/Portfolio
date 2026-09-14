import {
  BookOpen,
  Workflow,
  FileCheck,
  Play,
  Bug,
  RefreshCw,
  ShieldCheck,
  BarChart3,
} from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  {
    step: '01',
    title: 'Understand Requirements',
    description:
      'Read and understand the requirements, user stories, and expected application behavior.',
    icon: BookOpen,
  },
  {
    step: '02',
    title: 'Create Test Scenarios',
    description:
      'Identify the major features, workflows, and areas that need to be tested.',
    icon: Workflow,
  },
  {
    step: '03',
    title: 'Write Test Cases',
    description:
      'Create clear test cases covering positive, negative, boundary, and edge-case scenarios.',
    icon: FileCheck,
  },
  {
    step: '04',
    title: 'Execute Tests',
    description:
      'Run the test cases and compare the actual result with the expected result.',
    icon: Play,
  },
  {
    step: '05',
    title: 'Identify & Report Bugs',
    description:
      'When an issue is found, document the bug with steps to reproduce, expected result, actual result, severity, and supporting screenshots.',
    icon: Bug,
  },
  {
    step: '06',
    title: 'Retesting',
    description:
      'After the developer fixes a defect, test the same scenario again to verify that the issue has been resolved.',
    icon: RefreshCw,
  },
  {
    step: '07',
    title: 'Regression Testing',
    description:
      'Check related features to make sure that the new fix or change has not introduced new issues.',
    icon: ShieldCheck,
  },
  {
    step: '08',
    title: 'Test Summary',
    description:
      'Prepare the final testing summary including test execution status, defects found, and overall testing results.',
    icon: BarChart3,
  },
]

export default function TestingProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section bg-off-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Testing Workflow"
            title="How I Test an Application"
            description="My structured approach to finding, reporting, and verifying software defects."
          />
        </ScrollAnimation>

        <div className="relative mt-12">
          {/* Central timeline line (Desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-mint via-forest-green/40 to-mint opacity-40"
            aria-hidden="true"
          />

          {/* Left timeline line (Mobile) */}
          <div
            className="md:hidden absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-mint via-forest-green/40 to-mint opacity-40"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 1 // right on desktop if index 1, 3, 5, 7

              return (
                <ScrollAnimation key={item.step} delay={index * 60}>
                  {/* Desktop alternating row layout / Mobile left-aligned layout */}
                  <div
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card Side (Half Width on Desktop) */}
                    <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                      <div
                        className={`group bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-mint/40 hover:-translate-y-1 transition-all duration-300 ${
                          isEven ? 'md:text-left' : 'md:text-right'
                        }`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-2.5 ${
                            isEven ? 'md:justify-start' : 'md:justify-end'
                          }`}
                        >
                          <span className="text-xs font-bold font-mono text-mint tracking-wider bg-soft-mint px-2.5 py-1 rounded-md">
                            STEP {item.step}
                          </span>
                          <span className="text-xs font-semibold text-dark-text/40 uppercase tracking-wider">
                            Phase {index + 1}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-dark-text mb-2 group-hover:text-forest-green transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-dark-text/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Badge (Centered on Desktop line, Left on Mobile line) */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-deep-forest border-2 border-mint text-mint flex items-center justify-center shadow-lg shadow-mint/20 z-10 transition-transform duration-300 hover:scale-110">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                    </div>

                    {/* Empty Half Space for Desktop Grid Balance */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
