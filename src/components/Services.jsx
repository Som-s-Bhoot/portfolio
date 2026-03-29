import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    title: 'Phase 1: Discovery & Architecture',
    description: 'Deep-dive into your workflows, bottlenecks, and team dynamics. Not a generic AI readiness questionnaire.',
    details: [
      'Process mapping — workflows ripe for agent automation',
      'Infrastructure recommendation — the right foundation for your maturity and budget',
      'Agent team design — how many agents, what roles, what specializations',
      'ROI projection — hard numbers for your top 3 use cases',
    ],
    deliverable: 'Architecture blueprint + ROI model + implementation roadmap',
  },
  {
    title: 'Phase 2: Build & Deploy',
    description: 'The system comes alive. Production workflows, not demos.',
    details: [
      'Stand up infrastructure — LLM providers, orchestration, channels, memory, security',
      'Configure agents — personality, instructions, skills, scoped tool access',
      'Build 2–3 core workflows — end-to-end automated pipelines',
      'Integrate with your stack — CRMs, GitHub, databases, project management',
    ],
    deliverable: 'Fully operational agentic system with 2–3 live workflows',
  },
  {
    title: 'Phase 3: Optimize & Train',
    description: 'The best system fails if your team doesn\'t know how to work with it.',
    details: [
      'Hands-on training — your team works alongside agents in real scenarios',
      'Workflow refinement — iterate based on real usage and edge cases',
      'Cost optimization — model routing, context management, token efficiency',
      'Documentation & playbooks — everything for self-sufficiency',
    ],
    deliverable: 'Trained team + optimized system + self-sufficiency playbooks',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const fplRef = useRef(null)
  const aiRef = useRef(null)
  const connectorRef = useRef(null)
  const [expandedPhase, setExpandedPhase] = useState(-1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      ;[fplRef, aiRef, connectorRef].forEach((ref) => {
        if (!ref.current) return
        gsap.from(ref.current, {
          y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-[#0a0a0f] relative">
      <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-10 md:mb-14">
          <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold mb-4">What I Do</p>
          <h2 className="display-medium text-gray-100">Two ways I work with organizations.</h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl leading-[1.75]">
            Product leadership and AI systems architecture. Often together — always grounded in systems thinking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* ═══ Service 01: Fractional Product Leadership ═══ */}
          <div
            ref={fplRef}
            className="rounded-2xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/[0.08] to-transparent p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-600 text-sm font-mono">01</span>
              <span className="text-[10px] px-3 py-1 rounded-full border border-[#6366f1]/30 text-[#6366f1]/70 tracking-[0.2em] uppercase">
                For teams that need senior leadership without the full-time hire
              </span>
            </div>
            <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Fractional Product Leadership
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-[1.75] max-w-3xl mb-8">
              Your product team needs a strategic leader — someone who's run a $170M ARR product line, built PM teams from scratch, and shipped across enterprise B2B SaaS for 18 years. I step in 2–3 days per week: setting strategy, running planning, mentoring PMs, aligning stakeholders. Then I step back once your team has the muscle memory.
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-3xl">
              {[
                'Product strategy & vision definition',
                'Roadmap planning & prioritization',
                'Stakeholder alignment & communication',
                'Team building & PM mentorship',
                'OKR/KPI framework setup',
                'Go-to-market strategy',
              ].map((detail) => (
                <div key={detail} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-[#6366f1] text-[8px]">●</span>
                  {detail}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['Strategy', 'Roadmapping', 'Team Building', 'Stakeholder Alignment'].map((tag) => (
                <span key={tag} className="text-xs px-4 py-1.5 rounded-full border border-[#6366f1]/30 text-[#6366f1]/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ═══ Service 02: AI Strategy & Consulting ═══ */}
          <div
            ref={aiRef}
            className="rounded-2xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/[0.08] to-transparent p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-600 text-sm font-mono">02</span>
              <span className="text-[10px] px-3 py-1 rounded-full border border-[#6366f1]/30 text-[#6366f1]/70 tracking-[0.2em] uppercase">
                For organizations ready to move from chatbots to autonomous AI teams
              </span>
            </div>
            <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              AI Strategy &amp; Consulting
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-[1.75] max-w-3xl mb-8">
              Most companies plateau at Stage 1 — a chatbot bolted onto existing workflows. The real value is in Stage 3: specialized AI agents with memory, defined roles, structured handoffs, and accountability. I design, build, and operationalize these systems. Not demos — production workflows your team uses from day one.
            </p>

            {/* Phased Engagement */}
            <div className="space-y-3 mb-8">
              {phases.map((phase, i) => (
                <div
                  key={phase.title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors duration-300 hover:border-[#6366f1]/20"
                >
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left group"
                    data-cursor-hover
                  >
                    <div>
                      <p className="text-white text-sm md:text-base font-semibold group-hover:text-[#6366f1] transition-colors">
                        {phase.title}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{phase.description}</p>
                    </div>
                    <span className={`text-gray-500 text-xl shrink-0 ml-4 transition-transform duration-300 ${expandedPhase === i ? 'rotate-45' : ''}`}>+</span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: expandedPhase === i ? '500px' : '0',
                      opacity: expandedPhase === i ? 1 : 0,
                    }}
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="space-y-2 mb-4">
                        {phase.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-[#6366f1] text-[8px] mt-1.5 shrink-0">→</span>
                            {detail}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 italic border-t border-white/5 pt-3">
                        Deliverable: {phase.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Advisory Retainer */}
              <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5">
                <div className="flex items-center gap-3">
                  <p className="text-gray-400 text-sm font-medium">Ongoing: Advisory Retainer</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-600 tracking-wider uppercase">Optional</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Monthly optimization reviews, model upgrades, new workflow development, and priority support.
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-sm italic mb-8">
              No lock-in. You own the system. Every phase includes documentation and handoff materials.
            </p>

            <div className="flex flex-wrap gap-2">
              {['AI Architecture', 'Agent Design', 'LLM Integration', 'Systems Thinking'].map((tag) => (
                <span key={tag} className="text-xs px-4 py-1.5 rounded-full border border-[#6366f1]/30 text-[#6366f1]/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ═══ Connector Block ═══ */}
          <div
            ref={connectorRef}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-[#6366f1]/40" />
              <span className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold">↔ Better Together</span>
              <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-[#6366f1]/40" />
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-[1.75] max-w-2xl mx-auto">
              Product teams that understand AI ship faster. AI systems designed with product thinking actually work. Most organizations need both — a human team running with clarity, and an AI team running with autonomy. I bring the rare combination of 18 years building products and hands-on experience architecting autonomous AI systems in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
