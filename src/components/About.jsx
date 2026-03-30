import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { value: '18', unit: 'Years', label: 'Building Products' },
  { value: '9', unit: 'Years', label: 'UX Design' },
  { value: '9', unit: 'Years', label: 'Product Management' },
  { value: 'CMU', unit: 'HCI', label: 'MS 2014' },
]

const timeline = [
  { year: '2025–Now', role: 'Fractional Product Leader · AI Systems Architect', desc: 'Stepped away from full-time to go deeper into AI. Now helping B2B SaaS companies as a fractional product leader and building autonomous AI systems — combining 18 years of product, UX, and AI expertise.' },
  { year: '2016–2025', role: 'Product Manager → Director', desc: 'Strategic/Agile Portfolio Management, Work Management. Roadmaps, GTM, retention/growth, new market entry. Led AI-based product initiatives.' },
  { year: '2013–2014', role: 'Carnegie Mellon University', desc: 'MS in Human-Computer Interaction. Pittsburgh, PA.' },
  { year: '2007–2016', role: 'UX Designer → Lead', desc: 'Enterprise design systems, interaction design, information architecture. Built and led design teams across complex B2B products.' },
]

const skills = [
  'Product Strategy', 'UX Research', 'Design Systems', 'Roadmapping',
  'AI/LLM Integration', 'React', 'Full-Stack Dev', 'Figma',
  'User Story Mapping', 'Agile/SAFe', 'Data Analysis', 'Prototyping',
  'Stakeholder Mgmt', 'Team Building', 'GTM Strategy', 'Accessibility',
]

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const linesRef = useRef([])
  const metricsRef = useRef(null)
  const timelineRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      linesRef.current.forEach((line, i) => {
        if (!line) return
        gsap.from(line, {
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: line, start: 'top 90%', toggleActions: 'play none none reverse' },
          delay: i * 0.08,
        })
      })

      if (metricsRef.current) {
        gsap.from(metricsRef.current.querySelectorAll('.metric-item'), {
          y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: metricsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }

      if (timelineRef.current) {
        gsap.from(timelineRef.current.querySelectorAll('.timeline-item'), {
          x: -40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: timelineRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }

      if (skillsRef.current) {
        gsap.from(skillsRef.current.querySelectorAll('.skill-tag'), {
          scale: 0.8, opacity: 0, duration: 0.4, ease: 'power3.out', stagger: 0.03,
          scrollTrigger: { trigger: skillsRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-[120px] bg-[#FAFAF7] relative">
      <div className="w-full px-6 md:px-16 max-w-[1280px] mx-auto">
        <div ref={titleRef} className="mb-10 md:mb-14">
          <div className="accent-bar mb-5"></div>
          <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-4">About</p>
          <h2 className="display-medium text-[#1A1A1A]">The arc.</h2>
        </div>

        {/* Two-column text grid */}
        <div className="grid md:grid-cols-2 gap-20 mb-12">
          <div>
            <p ref={(el) => (linesRef.current[0] = el)}
              className="text-[17px] font-normal text-[#2D2D2D] leading-[1.8] mb-5">
              I've spent 18 years building and shaping digital products — first as a{' '}
              <em className="font-medium text-[#1A1A1A] not-italic">UX designer</em> obsessing over every
              interaction, then as a <em className="font-medium text-[#1A1A1A] not-italic">product leader</em>{' '}
              driving strategy at the director level, and now as an{' '}
              <em className="font-medium text-[#1A1A1A] not-italic">AI builder</em> crafting the next wave of intelligent tools.
            </p>
            <p ref={(el) => (linesRef.current[1] = el)}
              className="text-[17px] font-normal text-[#2D2D2D] leading-[1.8]">
              This unusual career arc — from pixels to product-market fit to
              machine learning pipelines — gives me a rare perspective. I don't just
              understand what to build; I understand <em>how</em> it should feel,{' '}
              <em>why</em> it matters, and <em>how to ship it</em>.
            </p>
          </div>
          <div>
            <p ref={(el) => (linesRef.current[2] = el)}
              className="text-[17px] font-normal text-[#2D2D2D] leading-[1.8]">
              I hold an MS in Human-Computer Interaction from Carnegie Mellon
              University. After a decade leading product at Planview, I stepped away to go deeper into AI and build at the intersection of product, UX, and machine intelligence. Now I bring that combined perspective to B2B SaaS companies as a fractional product leader — helping teams ship better products, faster.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12">
          {metrics.map((m, i) => (
            <div key={m.label} className={`metric-item text-center py-9 px-4 ${i > 0 ? 'border-l border-[#E8E8ED]' : ''}`}>
              <p className="text-[40px] font-light text-[#1A1A1A] tracking-[-0.03em] leading-none">{m.value}</p>
              <p className="text-[11px] font-semibold text-[#5A5A5A] uppercase tracking-[0.12em] mt-1">{m.unit}</p>
              <p className="text-[13px] font-normal text-[#4A4A4A] mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Career Timeline */}
        <div ref={timelineRef} className="mt-16 md:mt-20">
          <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-10">Career Journey</p>
          <div className="space-y-0">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item grid md:grid-cols-12 gap-4 py-6 border-b border-[#E8E8ED] first:border-t first:border-[#E8E8ED]">
                <div className="md:col-span-3">
                  <p className="text-[#1A1A1A] text-sm font-mono tracking-wide font-medium">{item.year}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[#2D2D2D] font-medium text-sm">{item.role}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="mt-14 md:mt-18">
          <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-8">Skills & Tools</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag text-xs px-4 py-2 rounded-full border border-[#E8E8ED] text-[#3A3A3A] bg-[#F5F5F0] hover:border-[#D4A574] hover:text-[#D4A574] transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
