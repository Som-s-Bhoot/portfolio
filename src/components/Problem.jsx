import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stages = [
  { number: '01', label: 'Smart Chatbot', description: 'One AI tool, used ad hoc. No memory. Every conversation starts from zero.' },
  { number: '02', label: 'Automated Workflows', description: 'AI + Zapier/n8n. Triggers fire, actions execute. Brittle. No judgment.' },
  { number: '03', label: 'Autonomous AI Team', description: 'Specialized agents with memory, roles, handoffs, and accountability.', active: true },
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
    <section id="problem" ref={sectionRef} className="py-[120px] bg-[#FAFAF7] relative">
      <div className="w-full px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-14 md:mb-20">
          <div className="accent-bar mb-5"></div>
          <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-4">The Problem</p>
          <h2 className="display-medium text-[#1A1A1A] mb-8">
            You've built a chatbot.{' '}
            <span className="text-[#86868B]">Not a system.</span>
          </h2>
          <p className="text-[#2D2D2D] text-[17px] font-normal leading-[1.8] max-w-2xl">
            Your team is experimenting with AI. Someone set up a ChatGPT workspace. Maybe a few Zapier automations. A Slack bot that answers questions.
          </p>
          <p className="text-[#2D2D2D] text-[17px] font-normal leading-[1.8] max-w-2xl mt-4">
            You're not behind — you're exactly where 90% of organizations are. But there's a ceiling.
          </p>
        </div>

        {/* White card container */}
        <div className="bg-white rounded-3xl border border-[#E8E8ED] p-10 md:p-20">
          {/* Problem body */}
          <div className="max-w-[620px] mb-12">
            <p className="text-[17px] font-normal text-[#2D2D2D] leading-[1.8] mb-4">
              A chatbot answers questions when prompted. An agentic system runs your operations — research, content, development, analysis — end to end, with minimal human intervention.
            </p>
          </div>

          {/* 89% stat highlight */}
          <div className="flex items-baseline gap-5 py-9 border-t border-b border-[#E8E8ED] mb-12">
            <span className="text-[64px] font-light text-[#D4A574] tracking-[-0.03em]">89%</span>
            <div>
              <p className="text-[16px] font-normal text-[#3A3A3A] leading-[1.6]">of organizations with agentic AI are stuck in pilots & POCs</p>
              <p className="text-[12px] font-medium text-[#5A5A5A] mt-1">— Deloitte 2025</p>
            </div>
          </div>

          {/* 3-stage cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <div
                key={stage.number}
                ref={(el) => (stagesRef.current[i] = el)}
                className={`p-8 rounded-2xl transition-colors duration-300 ${
                  stage.active
                    ? 'bg-[#1D1D1F] text-[#FAFAF7] border border-[#1D1D1F]'
                    : 'bg-[#FAFAF7] border border-[#E8E8ED]'
                }`}
              >
                <p className={`text-[11px] font-semibold tracking-[0.14em] uppercase mb-4 ${
                  stage.active ? 'text-white/60' : 'text-[#5A5A5A]'
                }`}>
                  Stage {stage.number}
                </p>
                <h3 className={`text-2xl font-normal mb-3 ${
                  stage.active ? 'text-[#FAFAF7]' : 'text-[#1A1A1A]'
                }`}>
                  {stage.label}
                </h3>
                <p className={`text-[15px] font-normal leading-[1.65] ${
                  stage.active ? 'text-white/60' : 'text-[#3A3A3A]'
                }`}>
                  {stage.description}
                </p>
                {stage.active && (
                  <span className="inline-block mt-4 px-3.5 py-1.5 bg-[#D4A574] text-[#1D1D1F] text-[11px] font-medium tracking-[0.06em] rounded-[20px]">
                    Where the value is
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gap callout */}
        <div ref={gapRef} className="max-w-2xl mx-auto mt-16">
          <div className="border-l-[3px] border-[#D4A574] pl-6">
            <p className="text-[#3A3A3A] text-base md:text-lg leading-[1.75] italic">
              The jump from Stage 2 to Stage 3 is where most organizations fail. Not because the technology isn't ready — it is. But because it requires{' '}
              <span className="text-[#1A1A1A] font-medium not-italic">systems thinking</span>,{' '}
              <span className="text-[#1A1A1A] font-medium not-italic">organizational design</span>, and{' '}
              <span className="text-[#1A1A1A] font-medium not-italic">hard-won operational knowledge</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
