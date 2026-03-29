import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 'Enterprise Product Team', desc: 'Built and grew the product management team in Bangalore from scratch', type: 'product' },
  { value: '10 Agents', desc: 'Autonomous AI team running daily operations in production', type: 'ai' },
  { value: '$170M ARR', desc: 'Managed a product line generating $170 million in annual recurring revenue', type: 'product' },
  { value: '0-1 Product in 6 Weeks', desc: 'Zero to production AI-native SaaS product (CognX)', type: 'ai' },
  { value: 'Growth', desc: 'Increased product activation and adoption across the customer base', type: 'product' },
  { value: '4 Markets', desc: 'Competitive intelligence reports delivered in a single week', type: 'ai' },
  { value: 'Fortune 500', desc: 'Served Fortune 500 enterprise customers globally', type: 'product' },
  { value: 'QA for Agentic Systems', desc: 'Production test suite including 36 AI-specific evaluations', type: 'ai' },
  { value: 'APAC Launch', desc: 'Led product launch and business development across the APAC region', type: 'product' },
]

export default function Impact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reverse' },
          delay: i * 0.08,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="impact" ref={sectionRef} className="py-16 md:py-20 bg-[#111827] relative">
      <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-10 md:mb-14">
          <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Track Record</p>
          <h2 className="display-medium text-gray-100">What I've delivered.</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`rounded-2xl border p-8 hover:border-[#6366f1]/30 transition-colors duration-300 ${
                stat.type === 'ai'
                  ? 'border-[#6366f1]/15 bg-[#6366f1]/[0.04]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <p className={`font-bold text-white tracking-tight ${
                  stat.value.length > 12 ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'
                }`}>
                  {stat.value}
                </p>
                {stat.type === 'ai' && (
                  <span className="text-[8px] px-2 py-0.5 rounded-full bg-[#6366f1]/20 text-[#6366f1]/80 tracking-[0.15em] uppercase font-semibold">
                    AI
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
