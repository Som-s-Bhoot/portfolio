import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   FEATURED WORK DATA
═══════════════════════════════════════════════════════════════ */
const featuredWorks = [
  {
    id: 'mission-control',
    title: 'Mission Control',
    type: 'Product',
    description: 'A collaborative task management platform built from the ground up with AI at its core. Where human intent meets AI capability.',
    image: '/mc-kanban.png',
    imageAlt: 'Mission Control Kanban board',
    features: [
      { icon: '✦', label: 'AI Agent', desc: 'Built-in AI that collaborates on tasks, creates content, and automates workflows' },
      { icon: '◫', label: 'Kanban Board', desc: 'Drag-and-drop task management with customizable boards' },
      { icon: '⟐', label: 'Real-Time Sync', desc: 'Cross-platform notifications via Telegram, push, and in-app' },
      { icon: '◎', label: 'Collaborative', desc: 'Multi-user workspace with role-based access' },
    ],
    cta: { label: 'View Live App', url: 'https://mission-control-inky.vercel.app', icon: 'external' },
    tags: ['React 19', 'Supabase', 'Tailwind', 'AI / LLM'],
  },
  {
    id: 'tripartite-whitepaper',
    title: 'The Tripartite Architecture of Product Value',
    type: 'Whitepaper',
    description: 'A definitive analysis of Actual, Perceived, and Relative Value drivers in Strategic Product Management.',
    image: '/whitepaper-cover.png',
    imageAlt: 'Whitepaper Cover',
    imageStyle: 'cover', // special styling for PDF cover
    features: [
      { icon: '◉', label: 'Actual Value', desc: 'Functional utility, reliability, and efficiency — the measurable outcomes' },
      { icon: '◎', label: 'Perceived Value', desc: 'Brand perception, UX quality, and emotional resonance' },
      { icon: '◈', label: 'Relative Value', desc: 'Competitive positioning and market context dynamics' },
    ],
    cta: { label: 'Download PDF', url: '/tripartite-whitepaper.pdf', icon: 'download' },
    tags: ['Product Strategy', 'Value Framework', 'AI-Assisted'],
  },
]

const otherProjects = [
  {
    title: 'Portfolio Site',
    desc: 'This very site — built with Vite, React, GSAP, and Tailwind. Awwwards-inspired editorial design.',
    tech: ['React', 'GSAP', 'Lenis', 'Tailwind'],
  },
  {
    title: 'AI Agent Infrastructure',
    desc: 'A personal AI assistant (Bhoot 👻) that manages email, calendar, tasks, notifications, and more via natural language.',
    tech: ['Node.js', 'Claude API', 'Telegram', 'Supabase'],
  },
  {
    title: 'Arduino/RPi Projects',
    desc: 'Hardware tinkering — sensor systems, home automation, 3D-printed enclosures on a Bambu Lab A1.',
    tech: ['Arduino', 'Raspberry Pi', '3D Printing', 'C++'],
  },
]

/* ═══════════════════════════════════════════════════════════════
   FEATURED WORK ITEM COMPONENT
═══════════════════════════════════════════════════════════════ */
function FeaturedWorkItem({ work, index }) {
  const itemRef = useRef(null)

  useEffect(() => {
    if (itemRef.current) {
      gsap.from(itemRef.current, {
        y: 80, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: itemRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
    }
  }, [])

  const isWhitepaper = work.imageStyle === 'cover'

  return (
    <div
      ref={itemRef}
      id={work.id}
      className="min-h-screen flex items-center py-20 md:py-32"
    >
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold">{work.type}</span>
          <h2 className="display-medium text-gray-900 mt-3 mb-6">{work.title}</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            {work.description}
          </p>

          {/* Features */}
          <div className="space-y-5 mb-10">
            {work.features.map((f) => (
              <div key={f.label} className="flex gap-4">
                <span className="text-gray-900 text-base mt-0.5 shrink-0">{f.icon}</span>
                <div>
                  <p className="text-gray-900 text-sm font-medium">{f.label}</p>
                  <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA & Tags */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={work.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-xs tracking-[0.1em] uppercase rounded-full hover:bg-gray-700 transition-colors"
              data-cursor-hover
            >
              {work.cta.label}
              {work.cta.icon === 'external' ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              )}
            </a>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full border border-gray-200 text-gray-400 tracking-wider uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          {isWhitepaper ? (
            <a
              href={work.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              data-cursor-hover
            >
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.imageAlt}
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white px-5 py-2.5 rounded-full text-xs text-gray-900 shadow-lg flex items-center gap-2 font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Read PDF
                  </span>
                </div>
              </div>
            </a>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={work.image}
                alt={work.imageAlt}
                className="w-full h-auto block"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function CaseStudy() {
  const sectionRef = useRef(null)
  const navRef = useRef(null)
  const [activeWork, setActiveWork] = useState(featuredWorks[0].id)
  const otherRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up scroll triggers for each featured work
      featuredWorks.forEach((work) => {
        ScrollTrigger.create({
          trigger: `#${work.id}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveWork(work.id),
          onEnterBack: () => setActiveWork(work.id),
        })
      })

      // Animate other projects
      if (otherRef.current) {
        gsap.from(otherRef.current.querySelectorAll('.project-card'), {
          y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: otherRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToWork = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="work" ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Sticky Side Navigation */}
      <div
        ref={navRef}
        className="hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
      >
        {featuredWorks.map((work) => (
          <button
            key={work.id}
            onClick={() => scrollToWork(work.id)}
            className={`group flex items-center gap-3 text-left transition-all duration-300 ${
              activeWork === work.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
            }`}
            data-cursor-hover
          >
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeWork === work.id ? 'bg-gray-900 scale-100' : 'bg-gray-400 scale-75'
              }`}
            />
            <span
              className={`text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                activeWork === work.id
                  ? 'text-gray-900 translate-x-0'
                  : 'text-gray-400 -translate-x-1 group-hover:translate-x-0'
              }`}
            >
              {work.type}
            </span>
          </button>
        ))}
      </div>

      <div className="w-full px-6 md:px-10 lg:pl-32 xl:pl-40">
        {/* Section Header */}
        <div className="pt-32 md:pt-44 pb-8">
          <p className="text-gray-900 text-xs tracking-[0.35em] uppercase font-semibold">Featured Work</p>
        </div>

        {/* Featured Works */}
        {featuredWorks.map((work, index) => (
          <FeaturedWorkItem key={work.id} work={work} index={index} />
        ))}

        {/* Other Projects */}
        <div ref={otherRef} className="py-24 md:py-32 border-t border-gray-200">
          <h3 className="text-gray-500 text-xs tracking-[0.35em] uppercase font-semibold mb-10">Other Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="project-card bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-300 shadow-sm">
                <h4 className="font-bold text-xl text-gray-900 mb-3 tracking-tight">{project.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-3 py-1 rounded-full border border-gray-200 text-gray-400 tracking-wider uppercase">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
