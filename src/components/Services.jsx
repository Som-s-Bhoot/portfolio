import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Fractional Product Leadership',
    description: 'Your product team needs senior leadership but you\'re not ready for a full-time VP of Product. I step in as a fractional product leader — setting strategy, building your PM team, aligning stakeholders, and driving execution. I\'ve done this across 18 years in enterprise B2B SaaS, most recently as Director of Product at Planview. I embed with your team for 3–6 months and leave you with the systems, processes, and people to run without me.',
    primary: true,
    details: [
      'Product strategy & vision definition',
      'Roadmap planning & prioritization',
      'Stakeholder alignment & communication',
      'Team building & mentorship',
      'OKR/KPI framework setup',
      'Go-to-market strategy',
    ],
    tags: ['Strategy', 'Roadmapping', 'Team Building', 'Stakeholder Alignment'],
  },
  {
    number: '02',
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
    number: '03',
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
  {
    number: '04',
    title: 'AI Strategy & Consulting',
    description: 'Help teams figure out where AI fits in their product — and where it doesn\'t. From opportunity identification to implementation strategy, grounded in real product experience, not hype.',
    details: [
      'AI opportunity assessment',
      'LLM integration strategy',
      'AI UX design patterns',
      'Build vs. buy analysis',
      'AI agent architecture',
      'Prompt engineering & evaluation',
    ],
    tags: ['AI Strategy', 'LLM', 'Agent Design', 'Implementation'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const itemsRef = useRef([])
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      itemsRef.current.forEach((item, i) => {
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

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-[#0a0a0f] relative">
      <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-10 md:mb-14">
          <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold mb-4">What I Do</p>
          <h2 className="display-medium text-gray-100">How I can help.</h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl leading-[1.75]">
            I work at the intersection of product thinking, design craft, and AI capability. 
            Whether you need strategic leadership or hands-on building — I do both.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Primary service — hero card */}
          {services.filter(s => s.primary).map((service) => (
            <div
              key={service.number}
              ref={(el) => (itemsRef.current[0] = el)}
              className="mb-12 rounded-2xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/[0.08] to-transparent p-8 md:p-12"
            >
              <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Primary Offering</p>
              <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-[1.75] max-w-3xl mb-8">
                {service.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-3xl">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-[#6366f1] text-[8px]">●</span>
                    {detail}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-4 py-1.5 rounded-full border border-[#6366f1]/30 text-[#6366f1]/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Secondary services */}
          <p className="text-gray-500 text-xs tracking-[0.25em] uppercase font-semibold mb-6 mt-4">Specialist Engagements</p>
          {services.filter(s => !s.primary).map((service, i) => (
            <div
              key={service.number}
              ref={(el) => (itemsRef.current[i + 1] = el)}
              className={`service-item ${activeIndex === i ? 'active' : ''}`}
            >
              <button
                onClick={() => toggleService(i)}
                className="w-full flex items-center gap-6 md:gap-10 py-8 md:py-10 text-left group"
                data-cursor-hover
              >
                <span className="text-gray-600 text-sm font-mono shrink-0 w-8">{service.number}</span>
                <h3 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white group-hover:text-[#6366f1] transition-colors duration-300 flex-1 tracking-tight">
                  {service.title}
                </h3>
                <span className={`text-gray-500 text-2xl shrink-0 transition-transform duration-500 ${activeIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>

              <div className="service-content">
                <div className="pb-8 md:pb-10 pl-14 md:pl-[4.5rem] pr-8">
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6 max-w-2xl">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-[#6366f1] text-[8px]">●</span>
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs px-4 py-1.5 rounded-full border border-[#1f2937] text-gray-500">
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
