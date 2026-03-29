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

const secondaryServices = [
  {
    number: '03',
    title: 'App Development (Human + AI)',
    description: 'End-to-end product development that leverages AI at every stage — from intelligent features to AI-assisted building. Modern stacks, rapid iteration, production-quality output.',
    details: [
      'Full-stack web app development',
      'AI/LLM feature integration',
      'React + Supabase + Tailwind',
      'Rapid prototyping & MVP builds',
      'API design & architecture',
      'Deployment & CI/CD setup',
    ],
    tags: ['React', 'AI Integration', 'Full-Stack', 'Rapid Prototyping'],
  },
  {
    number: '04',
    title: 'UX Audits & Design Strategy',
    description: 'Deep-dive UX evaluations grounded in 9 years of design practice and a CMU HCI foundation. I identify friction, uncover opportunities, and deliver actionable recommendations that move metrics.',
    details: [
      'Heuristic evaluation & expert review',
      'User research & usability testing',
      'Information architecture review',
      'Design system audit & strategy',
      'Accessibility compliance (WCAG)',
      'Competitive UX analysis',
    ],
    tags: ['Heuristic Analysis', 'User Research', 'Design Systems', 'Accessibility'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)
  const connectorRef = useRef(null)
  const accordionRef = useRef([])
  const [expandedPhase, setExpandedPhase] = useState(-1)
  const [activeAccordion, setActiveAccordion] = useState(-1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }

      if (connectorRef.current) {
        gsap.from(connectorRef.current, {
          y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: connectorRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }

      accordionRef.current.forEach((item, i) => {
        if (!item) return
        gsap.from(item, {
          x: -60, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' },
          delay: i * 0.1,
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
          <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl leading-[1.75]">
            Product leadership and AI systems architecture. Often together — always grounded in systems thinking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* ═══ Co-Primary Services — Side by Side ═══ */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Service 01: Fractional Product Leadership */}
            <div className="relative rounded-2xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/[0.08] to-transparent p-8 md:p-10 overflow-hidden">
              <span className="absolute top-6 right-6 text-7xl font-light text-white/[0.04] select-none">01</span>
              <p className="text-[#6366f1]/70 text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
                For teams that need senior leadership without the full-time hire
              </p>
              <h3 className="font-bold text-2xl md:text-3xl text-white tracking-tight mb-4">
                Fractional Product Leadership
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-[1.75] mb-6">
                Your product team needs a strategic leader — someone who's run a $170M ARR product line, built PM teams from scratch, and shipped across enterprise B2B SaaS for 18 years. I step in 2–3 days per week: setting strategy, running planning, mentoring PMs, aligning stakeholders. Then I step back once your team has the muscle memory.
              </p>
              
              <div className="space-y-2 mb-6">
                {[
                  'Product strategy & vision definition',
                  'Roadmap planning & prioritization',
                  'Stakeholder alignment & communication',
                  'Team building & PM mentorship',
                  'OKR/KPI framework setup',
                  'Go-to-market strategy',
                ].map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#6366f1] text-[8px]">●</span>
                    {detail}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {['Strategy', 'Roadmapping', 'Team Building', 'Stakeholder Alignment'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#6366f1]/30 text-[#818cf8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Service 02: AI Strategy & Consulting */}
            <div className="relative rounded-2xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/[0.08] to-transparent p-8 md:p-10 overflow-hidden">
              <span className="absolute top-6 right-6 text-7xl font-light text-white/[0.04] select-none">02</span>
              <p className="text-[#6366f1]/70 text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
                For organizations ready to move from chatbots to autonomous AI teams
              </p>
              <h3 className="font-bold text-2xl md:text-3xl text-white tracking-tight mb-4">
                AI Strategy &amp; Consulting
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-[1.75] mb-6">
                Most companies plateau at Stage 1 — a chatbot bolted onto existing workflows. The real value is in Stage 3: specialized AI agents with memory, defined roles, structured handoffs, and accountability. I design, build, and operationalize these systems. Not demos — production workflows your team uses from day one.
              </p>

              {/* Phased Engagement */}
              <div className="space-y-0 mb-4">
                {phases.map((phase, i) => (
                  <div key={phase.title} className="border-b border-white/5 last:border-0">
                    <button
                      onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
                      className="w-full flex items-center justify-between py-3 text-left group"
                      data-cursor-hover
                    >
                      <p className="text-white text-sm font-semibold group-hover:text-[#6366f1] transition-colors">
                        {phase.title}
                      </p>
                      <span className={`text-gray-600 text-lg shrink-0 ml-3 transition-transform duration-300 ${expandedPhase === i ? 'rotate-45' : ''}`}>+</span>
                    </button>

                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{
                        maxHeight: expandedPhase === i ? '400px' : '0',
                        opacity: expandedPhase === i ? 1 : 0,
                      }}
                    >
                      <div className="pb-3">
                        <p className="text-gray-500 text-xs mb-2">{phase.description}</p>
                        <div className="space-y-1 mb-2">
                          {phase.details.map((d) => (
                            <div key={d} className="flex items-start gap-2 text-xs text-gray-400">
                              <span className="text-[#6366f1] mt-0.5 shrink-0">→</span>
                              {d}
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] text-[#6366f1]/60 italic">
                          Deliverable: {phase.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advisory Retainer */}
              <div className="flex items-center gap-2 mb-4">
                <p className="text-gray-500 text-xs">Ongoing: Advisory Retainer</p>
                <span className="text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-gray-600 tracking-wider uppercase">Optional</span>
              </div>

              <p className="text-gray-600 text-xs italic mb-6">
                No lock-in. You own the system. Every phase includes documentation and handoff materials.
              </p>

              <div className="flex flex-wrap gap-2">
                {['AI Architecture', 'Agent Design', 'LLM Integration', 'Systems Thinking'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#6366f1]/30 text-[#818cf8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ Connector Block ═══ */}
          <div ref={connectorRef} className="py-12 mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-[#6366f1]/40" />
              <h3 className="text-2xl font-semibold text-white">Better together.</h3>
              <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-[#6366f1]/40" />
            </div>
            <p className="text-gray-200 text-base leading-[1.75] max-w-2xl mx-auto">
              Product teams that understand AI ship faster. AI systems designed with product thinking actually work. Most organizations need both — a human team running with clarity, and an AI team running with autonomy. I bring the rare combination of 18 years building products and hands-on experience architecting autonomous AI systems in production.
            </p>
          </div>

          {/* ═══ Secondary Services — Accordions ═══ */}
          <p className="text-gray-500 text-xs tracking-[0.25em] uppercase font-semibold mb-6">Specialist Engagements</p>
          {secondaryServices.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => (accordionRef.current[i] = el)}
              className={`service-item ${activeAccordion === i ? 'active' : ''}`}
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                className="w-full flex items-center gap-6 md:gap-10 py-8 md:py-10 text-left group"
                data-cursor-hover
              >
                <span className="text-gray-600 text-sm font-mono shrink-0 w-8">{service.number}</span>
                <h3 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white group-hover:text-[#6366f1] transition-colors duration-300 flex-1 tracking-tight">
                  {service.title}
                </h3>
                <span className={`text-gray-500 text-2xl shrink-0 transition-transform duration-500 ${activeAccordion === i ? 'rotate-45' : ''}`}>+</span>
              </button>

              <div className="service-content">
                <div className="pb-8 md:pb-10 pl-14 md:pl-[4.5rem] pr-8">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6 max-w-2xl">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-[#6366f1] text-[8px]">●</span>
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs px-4 py-1.5 rounded-full border border-[#374151] text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
