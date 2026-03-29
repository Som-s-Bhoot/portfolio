import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stages = [
  {
    number: '01',
    label: 'Smart Chatbot',
    description: 'One AI tool, used ad hoc. No memory. Every conversation starts from zero.',
    color: '#6366f1',
    opacity: 0.4,
  },
  {
    number: '02',
    label: 'Automated Workflows',
    description: 'AI + Zapier/n8n. Triggers fire, actions execute. Brittle. No judgment.',
    color: '#6366f1',
    opacity: 0.65,
  },
  {
    number: '03',
    label: 'Autonomous AI Team',
    description: 'Specialized agents with memory, roles, handoffs, and accountability.',
    color: '#6366f1',
    opacity: 1,
  },
]

export default function Problem() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const stagesRef = useRef([])
  const gapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      stagesRef.current.forEach((stage, i) => {
        if (!stage) return
        gsap.from(stage, {
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: stage, start: 'top 90%', toggleActions: 'play none none reverse' },
          delay: i * 0.15,
        })
      })

      if (gapRef.current) {
        gsap.from(gapRef.current, {
          y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: gapRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="py-16 md:py-24 bg-[#0a0a0f] relative">
      <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-14 md:mb-20">
          <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold mb-4">The Problem</p>
          <h2 className="display-medium text-gray-100 mb-8">
            You've built a chatbot.{' '}
            <span className="text-gray-500">Not a system.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-[1.75] max-w-2xl">
            Your team is experimenting with AI. Someone set up a ChatGPT workspace. Maybe a few Zapier automations. A Slack bot that answers questions.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-[1.75] max-w-2xl mt-4">
            You're not behind — you're exactly where 90% of organizations are. But there's a ceiling.
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-[1.75] max-w-2xl mt-4">
            A chatbot answers questions when prompted. An agentic system runs your operations — research, content, development, analysis — end to end, with minimal human intervention.
          </p>
        </div>

        {/* Stat Callout */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="inline-block rounded-2xl border border-[#6366f1]/20 bg-[#6366f1]/[0.05] px-10 py-8 md:px-16 md:py-10">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">89%</p>
            <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
              of organizations with agentic AI are stuck in pilots &amp; POCs
            </p>
            <p className="text-gray-600 text-xs mt-3 tracking-wider uppercase">— Deloitte 2025</p>
          </div>
        </div>

        {/* 3-Stage Progression */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              ref={(el) => (stagesRef.current[i] = el)}
              className={`relative rounded-2xl p-8 transition-colors duration-300 ${
                i === 2
                  ? 'border border-[#6366f1]/30 bg-[#6366f1]/[0.05] shadow-[0_0_30px_rgba(99,102,241,0.08)] hover:border-[#6366f1]/50'
                  : 'border border-white/10 bg-white/[0.02] hover:border-[#6366f1]/30'
              }`}
            >
              {/* Stage number */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-mono tracking-wider"
                  style={{ color: stage.color, opacity: stage.opacity }}
                >
                  STAGE {stage.number}
                </span>
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                )}
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3"
                style={{ opacity: stage.opacity }}
              >
                {stage.label}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{stage.description}</p>

              {/* Active indicator for Stage 3 */}
              {i === 2 && (
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#6366f1] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
                  Where the value is
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gap Callout — blockquote style */}
        <div ref={gapRef} className="max-w-2xl mx-auto">
          <div className="border-l-[3px] border-[#6366f1] pl-6">
            <p className="text-gray-300 text-base md:text-lg leading-[1.75] italic">
              The jump from Stage 2 to Stage 3 is where most organizations fail. Not because the technology isn't ready — it is. But because it requires{' '}
              <span className="text-white font-medium not-italic">systems thinking</span>,{' '}
              <span className="text-white font-medium not-italic">organizational design</span>, and{' '}
              <span className="text-white font-medium not-italic">hard-won operational knowledge</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
