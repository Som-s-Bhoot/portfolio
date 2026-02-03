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
    images: [
      { src: '/mc-kanban.png', alt: 'Mission Control Kanban board', size: 'large' },
      { src: '/mc-documents.png', alt: 'Mission Control Documents', size: 'small' },
      { src: '/mc-overview.png', alt: 'Mission Control Overview', size: 'small' },
    ],
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
    coverImage: '/whitepaper-cover.png',
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
   MISSION CONTROL CONTENT (with image collage)
═══════════════════════════════════════════════════════════════ */
function MissionControlContent({ work }) {
  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Screenshot Collage */}
      <div className="lg:col-span-7">
        <div className="space-y-4">
          {/* Top: Kanban (full width, larger) */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src={work.images[0].src}
              alt={work.images[0].alt}
              className="w-full h-auto block"
            />
          </div>
          {/* Bottom row: Documents + Overview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src={work.images[1].src}
                alt={work.images[1].alt}
                className="w-full h-auto block"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src={work.images[2].src}
                alt={work.images[2].alt}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h2 className="display-medium text-gray-900 mb-4">{work.title}</h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
          {work.description}
        </p>

        {/* Features */}
        <div className="space-y-5 mb-8">
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
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
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
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   WHITEPAPER CONTENT
═══════════════════════════════════════════════════════════════ */
function WhitepaperContent({ work }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* PDF Cover */}
      <div>
        <a
          href={work.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          data-cursor-hover
        >
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 overflow-hidden">
            <img
              src={work.coverImage}
              alt="Whitepaper Cover"
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
      </div>

      {/* Content */}
      <div>
        <h2 className="display-medium text-gray-900 mb-4">{work.title}</h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
          {work.description}
        </p>

        {/* Key Topics */}
        <div className="space-y-5 mb-8">
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
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
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
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function CaseStudy() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState(featuredWorks[0].id)
  const contentRef = useRef(null)
  const otherRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (otherRef.current) {
        gsap.from(otherRef.current.querySelectorAll('.project-card'), {
          y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: otherRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate content on tab change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
    }
  }, [activeTab])

  const activeWork = featuredWorks.find((w) => w.id === activeTab)

  return (
    <section id="work" ref={sectionRef} className="py-32 md:py-44 bg-white relative overflow-hidden">
      <div className="w-full px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-gray-900 text-xs tracking-[0.35em] uppercase font-semibold mb-6">Featured Work</p>
          
          {/* Tabbed Navigation */}
          <div className="flex flex-wrap gap-3">
            {featuredWorks.map((work) => (
              <button
                key={work.id}
                onClick={() => setActiveTab(work.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === work.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                }`}
                data-cursor-hover
              >
                {work.type === 'Product' ? work.title : work.type}
              </button>
            ))}
          </div>
        </div>

        {/* Active Work Content */}
        <div ref={contentRef} className="mb-24 md:mb-32">
          {activeWork.id === 'mission-control' ? (
            <MissionControlContent work={activeWork} />
          ) : (
            <WhitepaperContent work={activeWork} />
          )}
        </div>

        {/* Other Projects */}
        <div ref={otherRef} className="pt-16 border-t border-gray-200">
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
