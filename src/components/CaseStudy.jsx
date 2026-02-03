import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mcFeatures = [
  { icon: '✦', label: 'AI Agent', desc: 'Built-in AI that collaborates on tasks, creates content, and automates workflows' },
  { icon: '◫', label: 'Kanban Board', desc: 'Drag-and-drop task management with customizable boards and real-time updates' },
  { icon: '⟐', label: 'Real-Time Sync', desc: 'Cross-platform notifications via Telegram, push, and in-app channels' },
  { icon: '◎', label: 'Collaborative', desc: 'Multi-user workspace with role-based access, comments, and shared context' },
]

const mcTechStack = ['React 19', 'Supabase', 'Tailwind CSS', 'Vite', 'AI / LLM', 'Edge Functions']

const wpTopics = [
  { icon: '◉', label: 'Actual Value', desc: 'Functional utility, reliability, and efficiency — the measurable outcomes' },
  { icon: '◎', label: 'Perceived Value', desc: 'Brand perception, UX quality, and emotional resonance' },
  { icon: '◈', label: 'Relative Value', desc: 'Competitive positioning and market context dynamics' },
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

export default function CaseStudy() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const mcRef = useRef(null)
  const wpRef = useRef(null)
  const otherRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 80, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      if (mcRef.current) {
        gsap.from(mcRef.current, {
          y: 60, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: mcRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }

      if (wpRef.current) {
        gsap.from(wpRef.current, {
          y: 60, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: wpRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }

      if (otherRef.current) {
        gsap.from(otherRef.current.querySelectorAll('.project-card'), {
          y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: otherRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-32 md:py-44 bg-white relative overflow-hidden">
      <div className="w-full px-6 md:px-10">
        <p ref={titleRef} className="text-gray-900 text-xs tracking-[0.35em] uppercase font-semibold mb-16">Featured Work</p>

        {/* Two Featured Works Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 md:mb-32">
          
          {/* ═══════════════════════════════════════════════════════════════
              MISSION CONTROL
          ═══════════════════════════════════════════════════════════════ */}
          <div ref={mcRef} className="group">
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold">Product</span>
              <h2 className="display-medium text-gray-900 mt-2">Mission Control</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-lg mt-4 leading-relaxed">
                A collaborative task management platform built from the ground up with AI at its core. 
                Where human intent meets AI capability.
              </p>
            </div>

            {/* Screenshot */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8 group-hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/mc-kanban.png" 
                alt="Mission Control Kanban board" 
                className="w-full h-auto block"
              />
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {mcFeatures.map((f) => (
                <div key={f.label} className="flex gap-3">
                  <span className="text-gray-900 text-sm mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-gray-900 text-xs font-medium">{f.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA & Tech */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://mission-control-inky.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs tracking-[0.1em] uppercase rounded-full hover:bg-gray-700 transition-colors"
                data-cursor-hover
              >
                View Live App
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <div className="flex flex-wrap gap-1.5">
                {mcTechStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[9px] px-2 py-1 rounded-full border border-gray-200 text-gray-400 tracking-wider uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              WHITEPAPER
          ═══════════════════════════════════════════════════════════════ */}
          <div ref={wpRef} className="group">
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold">Whitepaper</span>
              <h2 className="display-medium text-gray-900 mt-2 text-3xl md:text-4xl lg:text-[2.5rem] leading-tight">
                The Tripartite Architecture of Product Value
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-lg mt-4 leading-relaxed">
                A definitive analysis of Actual, Perceived, and Relative Value drivers in Strategic Product Management.
              </p>
            </div>

            {/* PDF Cover */}
            <a 
              href="/tripartite-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8 group-hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              data-cursor-hover
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8">
                <img 
                  src="/whitepaper-cover.png" 
                  alt="The Tripartite Architecture of Product Value - Whitepaper Cover" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-4 py-2 rounded-full text-xs text-gray-900 shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Read PDF
                  </span>
                </div>
              </div>
            </a>

            {/* Key Topics */}
            <div className="space-y-4 mb-8">
              {wpTopics.map((t) => (
                <div key={t.label} className="flex gap-3">
                  <span className="text-gray-900 text-sm mt-0.5 shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-gray-900 text-xs font-medium">{t.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/tripartite-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs tracking-[0.1em] uppercase rounded-full hover:bg-gray-700 transition-colors"
                data-cursor-hover
              >
                Download PDF
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] px-2 py-1 rounded-full border border-gray-200 text-gray-400 tracking-wider uppercase">Product Strategy</span>
                <span className="text-[9px] px-2 py-1 rounded-full border border-gray-200 text-gray-400 tracking-wider uppercase">Value Framework</span>
                <span className="text-[9px] px-2 py-1 rounded-full border border-gray-200 text-gray-400 tracking-wider uppercase">AI-Assisted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div ref={otherRef}>
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
