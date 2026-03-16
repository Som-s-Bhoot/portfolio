import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   CAPABILITY BADGE COMPONENT
═══════════════════════════════════════════════════════════════ */
function CapabilityBadges({ capabilities }) {
  if (!capabilities || capabilities.length === 0) return null
  
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {capabilities.map((cap) => (
        <span
          key={cap.label}
          className="inline-flex items-center gap-1.5 text-[10px] px-3 py-1 rounded-full bg-white/5 text-gray-400 tracking-wider uppercase border border-white/10"
        >
          <span>{cap.icon}</span>
          {cap.label}
        </span>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED WORK DATA
═══════════════════════════════════════════════════════════════ */
const featuredWorks = [
  {
    id: 'mission-control',
    title: 'Mission Control',
    type: 'Product',
    capabilities: [
      { icon: '🧠', label: 'Strategy' },
      { icon: '🎨', label: 'Design' },
      { icon: '⚡', label: 'AI' },
    ],
    description: 'A second-brain app built from scratch — product strategy, UX architecture, and AI integration all in one. Designed the information hierarchy, crafted the interaction patterns, and built an AI agent that collaborates as a teammate.',
    images: [
      { src: '/mc-kanban.png', alt: 'Mission Control Kanban board', size: 'large' },
      { src: '/mc-documents.png', alt: 'Mission Control Documents', size: 'small' },
      { src: '/mc-overview.png', alt: 'Mission Control Overview', size: 'small' },
    ],
    features: [
      { icon: '✦', label: 'AI Agent Collaboration', desc: 'Built-in AI that reads context, creates content, and acts on tasks — not just a chatbot' },
      { icon: '◫', label: 'Information Architecture', desc: 'Documents + Kanban unified under a coherent mental model for knowledge work' },
      { icon: '⟐', label: 'Real-Time Experience', desc: 'Optimistic UI, cross-platform sync, and instant feedback loops' },
      { icon: '◎', label: 'Design System', desc: 'Consistent component library with accessibility and responsive behavior built-in' },
    ],
    tags: ['React 19', 'Supabase', 'Tailwind', 'AI / LLM'],
  },
  {
    id: 'tripartite-whitepaper',
    title: 'The Tripartite Architecture of Product Value',
    type: 'Whitepaper',
    capabilities: [
      { icon: '🧠', label: 'Strategy' },
    ],
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
  {
    id: 'bhoot-ai',
    title: 'Bhoot AI Agent',
    type: 'AI Agent',
    capabilities: [
      { icon: '⚡', label: 'AI' },
      { icon: '🧠', label: 'Strategy' },
    ],
    description: 'A personal AI infrastructure that actually does things — manages email, calendar, tasks, code, and notifications. Not a chatbot; an autonomous agent with memory, tools, and judgment.',
    features: [
      { icon: '🔗', label: 'Tool Integration', desc: 'Email, calendar, GitHub, Notion, browser automation, shell access — all via natural language' },
      { icon: '🧠', label: 'Persistent Memory', desc: 'Maintains context across sessions with structured memory files and semantic search' },
      { icon: '⚙️', label: 'Autonomous Actions', desc: 'Proactive monitoring, scheduled tasks, and multi-step workflows without hand-holding' },
      { icon: '💬', label: 'Multi-Channel', desc: 'Telegram, Discord, Signal — same agent, any surface' },
    ],
    architecture: [
      { layer: 'Interface', items: ['Telegram', 'Discord', 'Signal', 'CLI'] },
      { layer: 'Core', items: ['Clawdbot Gateway', 'Claude API', 'Memory System'] },
      { layer: 'Tools', items: ['Email/Calendar', 'GitHub', 'Browser', 'Shell', 'Cron'] },
      { layer: 'Storage', items: ['Supabase', 'Local Files', 'Keychain'] },
    ],
    tags: ['Node.js', 'Claude API', 'Telegram', 'Supabase', 'MCP'],
  },
  {
    id: 'cognx',
    title: 'CognX',
    type: 'CognX',
    capabilities: [
      { icon: '🧠', label: 'Strategy' },
      { icon: '⚡', label: 'AI' },
      { icon: '💻', label: 'Engineering' },
    ],
    description: 'Built a full AI-native SaaS product from zero to production in 6 weeks — then killed it. CognX was an AI Chief of Staff that lived inside Slack, turning scattered conversations into structured work items, proactive alerts, and intelligent briefs. The decision to stop wasn\'t failure — it was the strategic clarity to recognize when the moat doesn\'t hold.',
    images: [
      { src: '/cognx-morning-brief.png', alt: 'CognX Morning Brief — automated daily digest', size: 'large' },
      { src: '/cognx-contextual-qa.png', alt: 'CognX Contextual Q&A with citations', size: 'small' },
      { src: '/cognx-onboarding.png', alt: 'CognX Onboarding — integrations setup', size: 'small' },
      { src: '/cognx-welcome.png', alt: 'CognX Welcome — workspace analysis', size: 'small' },
    ],
    timeline: [
      { phase: 'Week 1–2', text: 'Foundation — OAuth, Slack integration, RAG pipeline, document ingestion', stat: '3 phases shipped', color: 'green' },
      { phase: 'Week 3–4', text: 'Graph-augmented RAG, work item materialization, billing with Paddle', stat: '275 tests', color: 'blue' },
      { phase: 'Week 5', text: '10X Sprint — 8 features overnight. Conversation memory, proactive alerts, query router', stat: '488+ tests · 0 regressions', color: 'orange' },
      { phase: 'Week 6', text: 'Iron Dome — 66 E2E tests, 36 DeepEval evals, stabilization, accuracy upgrades', stat: '693 total tests', color: 'purple' },
      { phase: 'Decision', text: 'Killed with conviction — platform AI owns the data and distribution', stat: null, color: 'red' },
    ],
    insight: {
      title: 'Why I Killed It',
      levels: [
        { label: 'Built in 6 weeks', desc: 'Speed is no longer a moat — AI levels the field', color: 'green' },
        { label: 'Platform AI launching', desc: 'Data owners win; middleware gets squeezed', color: 'blue' },
        { label: 'Kill decision', desc: 'Strategic clarity > sunk cost fallacy', color: 'purple' },
      ],
    },
    features: [
      { icon: '🏗️', label: 'Zero to Production in 6 Weeks', desc: 'Sole PM and technical architect. Shipped OAuth, billing, RAG pipeline, graph-augmented search, 10 Inngest functions, 693 tests — with a 10-agent AI dev team orchestrated end-to-end.' },
      { icon: '🤖', label: 'AI-Native Architecture', desc: 'Not AI bolted onto CRUD. Conversation memory, proactive alerts, structured query routing, intelligent scope resolution — the AI was the product interface.' },
      { icon: '🛡️', label: 'Iron Dome Quality System', desc: '66-test E2E suite spanning auth, billing, integrations, RAG, security, and performance — plus 36 DeepEval tests for RAG quality and red-team probing.' },
      { icon: '⚔️', label: 'The Kill Decision', desc: 'Platform AI owns both the data and distribution. If AI agents can build your product in a sprint, competitors can too. Moats are non-technical now.' },
    ],
    tags: ['Next.js', 'Supabase', 'Inngest', 'RAG / LLM', 'Paddle', 'Slack API'],
  },
  {
    id: 'pulse-case-study',
    title: 'PULSE — AI Disrupts Inventory',
    type: 'Case Study',
    capabilities: [
      { icon: '🧠', label: 'Strategy' },
      { icon: '⚡', label: 'AI' },
    ],
    description: 'A strategic teardown of the $5B inventory management market. Not AI bolted onto legacy software — an AI that IS the interface, handling 80% of decisions autonomously.',
    mockupImage: '/pulse-mockup.png',
    insight: {
      title: 'The AI-First Difference',
      levels: [
        { label: 'Traditional', desc: 'You navigate menus, check dashboards', color: 'gray' },
        { label: 'AI-Enhanced', desc: 'AI suggests in sidebar, highlights anomalies', color: 'blue' },
        { label: 'AI-First (Pulse)', desc: 'AI IS the interface, handles 80% of decisions', color: 'purple' },
      ],
    },
    features: [
      { icon: '💬', label: 'Conversation, Not Navigation', desc: 'Primary interface is natural language. No training required.' },
      { icon: '🔔', label: 'Proactive, Not Reactive', desc: 'Monitors, predicts, and alerts — doesn\'t wait to be asked.' },
      { icon: '🤖', label: 'Autonomous with Guardrails', desc: 'Define your rules once. Pulse handles the rest.' },
      { icon: '🎯', label: 'Context-Aware Intelligence', desc: 'Understands your business, not just your inventory.' },
    ],
    tags: ['Product Strategy', 'AI Architecture', 'Market Analysis', 'UX Concept'],
  },
]

const otherProjects = [
  {
    title: 'Portfolio Site',
    desc: 'This very site — built with Vite, React, GSAP, and Tailwind. Awwwards-inspired editorial design.',
    tech: ['React', 'GSAP', 'Lenis', 'Tailwind'],
  },
  {
    title: 'Arduino/RPi Projects',
    desc: 'Hardware tinkering — sensor systems, home automation, 3D-printed enclosures on a Bambu Lab A1.',
    tech: ['Arduino', 'Raspberry Pi', '3D Printing'],
  },
]

/* ═══════════════════════════════════════════════════════════════
   MISSION CONTROL CONTENT (with image collage)
═══════════════════════════════════════════════════════════════ */
function MissionControlContent({ work }) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      <div className="lg:col-span-8">
        <div className="space-y-4">
          <div className="rounded overflow-hidden border border-white/10 shadow-sm hover:shadow-lg hover:shadow-[#6366f1]/5 transition-shadow duration-300">
            <img src={work.images[0].src} alt={work.images[0].alt} className="w-full h-auto block shadow-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded overflow-hidden border border-white/10 shadow-sm hover:shadow-lg hover:shadow-[#6366f1]/5 transition-shadow duration-300">
              <img src={work.images[1].src} alt={work.images[1].alt} className="w-full h-auto block shadow-2xl" />
            </div>
            <div className="rounded overflow-hidden border border-white/10 shadow-sm hover:shadow-lg hover:shadow-[#6366f1]/5 transition-shadow duration-300">
              <img src={work.images[2].src} alt={work.images[2].alt} className="w-full h-auto block shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col justify-center">
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-gray-100 mb-4">{work.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">{work.description}</p>

        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <span className="text-[#6366f1] text-base mt-0.5 shrink-0">{f.icon}</span>
              <div>
                <p className="text-white text-sm font-medium">{f.label}</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {work.cta && (
            <a href={work.cta.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white text-xs tracking-[0.1em] uppercase rounded-full hover:bg-[#4f46e5] transition-colors"
              data-cursor-hover>
              {work.cta.label}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          )}
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-gray-400 tracking-wider uppercase">{tag}</span>
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
      <div>
        <a href={work.cta.url} target="_blank" rel="noopener noreferrer" className="block group" data-cursor-hover>
          <div className="relative bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-2xl p-8 md:p-12 overflow-hidden">
            <img src={work.coverImage} alt="Whitepaper Cover"
              className="w-full max-w-md mx-auto rounded-sm shadow-2xl group-hover:scale-[1.02] transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-[#6366f1] px-5 py-2.5 rounded-full text-xs text-white shadow-lg flex items-center gap-2 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read PDF
              </span>
            </div>
          </div>
        </a>
      </div>

      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-gray-100 mb-4">{work.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">{work.description}</p>

        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <span className="text-[#6366f1] text-base mt-0.5 shrink-0">{f.icon}</span>
              <div>
                <p className="text-white text-sm font-medium">{f.label}</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={work.cta.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white text-xs tracking-[0.1em] uppercase rounded-full hover:bg-[#4f46e5] transition-colors"
            data-cursor-hover>
            {work.cta.label}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-gray-400 tracking-wider uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   BHOOT AI AGENT CONTENT
═══════════════════════════════════════════════════════════════ */
function BhootContent({ work }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div>
        <div className="bg-gradient-to-br from-[#111827] to-[#0a0a0f] rounded-2xl p-8 md:p-10 text-white border border-white/10">
          <div className="text-center mb-8">
            <span className="text-5xl mb-3 block">👻</span>
            <h3 className="text-lg font-semibold tracking-tight">Bhoot Architecture</h3>
          </div>
          
          <div className="space-y-4">
            {work.architecture.map((tier, idx) => (
              <div key={tier.layer}>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{tier.layer}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
                {idx < work.architecture.length - 1 && (
                  <div className="flex justify-center my-3">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-gray-100 mb-4">{work.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">{work.description}</p>

        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <span className="text-[#6366f1] text-base mt-0.5 shrink-0">{f.icon}</span>
              <div>
                <p className="text-white text-sm font-medium">{f.label}</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-gray-400 tracking-wider uppercase">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   COGNX CONTENT
═══════════════════════════════════════════════════════════════ */
function CognXContent({ work }) {
  const timelineColors = {
    green: '#22c55e',
    blue: '#3b82f6',
    orange: '#f97316',
    purple: '#a855f7',
    red: '#ef4444',
  }

  const insightColors = {
    green: { dot: '#22c55e', text: '#374151' },
    blue: { dot: '#3b82f6', text: '#374151' },
    purple: { dot: '#a855f7', text: '#7c3aed' },
  }

  return (
    <div className="space-y-16">
      {/* Top: Screenshot Collage */}
      <div>
        <div className="space-y-4">
          {/* Hero: Morning Brief (full width) */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src={work.images[0].src}
              alt={work.images[0].alt}
              className="w-full h-auto block"
            />
          </div>
          {/* Bottom row: 3 screens */}
          <div className="grid grid-cols-3 gap-4">
            {work.images.slice(1).map((img) => (
              <div key={img.alt} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Timeline + Content side by side */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Timeline Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-white">
          <div className="text-center mb-8">
            <span className="text-5xl mb-3 block">🧠</span>
            <h3 className="text-lg font-semibold tracking-tight">Build Timeline</h3>
          </div>

          <div className="space-y-0">
            {work.timeline.map((step, idx) => (
              <div key={step.phase} className="flex items-start gap-4 relative pb-5">
                {/* Dot + Line */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5"
                    style={{ background: timelineColors[step.color] }}
                  />
                  {idx < work.timeline.length - 1 && (
                    <div className="w-0.5 flex-1 mt-1 bg-white/10" style={{ minHeight: '2rem' }} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] mb-0.5">{step.phase}</p>
                  <p className="text-[13px] text-gray-200 leading-relaxed">{step.text}</p>
                  {step.stat && (
                    <span className="inline-block text-[11px] px-2.5 py-1 rounded-lg bg-white/8 text-gray-400 border border-white/5 mt-1.5">
                      {step.stat}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Kill stamp */}
          <div className="mt-4 pt-5 border-t border-white/10 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-red-400 px-5 py-2 border border-red-400/30 rounded-full bg-red-400/8">
              ⚰️ Killed — Strategic Exit
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <CapabilityBadges capabilities={work.capabilities} />
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

          {/* Insight Block */}
          <div className="mb-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">{work.insight.title}</p>
            <div className="space-y-3">
              {work.insight.levels.map((level) => (
                <div key={level.label} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: insightColors[level.color]?.dot }}
                  />
                  <div className="flex-1">
                    <span
                      className="text-sm font-medium"
                      style={{ color: insightColors[level.color]?.text }}
                    >
                      {level.label}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">— {level.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
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
   PULSE CASE STUDY CONTENT
═══════════════════════════════════════════════════════════════ */
function PulseContent({ work }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0a0a0a]">
          <img src={work.mockupImage} alt="PULSE AI Inventory Mockup" className="w-full h-auto block shadow-2xl" />
        </div>
      </div>

      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-gray-100 mb-4">{work.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">{work.description}</p>

        {/* AI Evolution Insight */}
        <div className="mb-8 p-5 glass-card">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{work.insight.title}</p>
          <div className="space-y-3">
            {work.insight.levels.map((level) => (
              <div key={level.label} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  level.color === 'purple' ? 'bg-purple-500' : 
                  level.color === 'blue' ? 'bg-blue-400' : 'bg-gray-500'
                }`} />
                <div className="flex-1">
                  <span className={`text-sm font-medium ${
                    level.color === 'purple' ? 'text-purple-400' : 'text-gray-300'
                  }`}>{level.label}</span>
                  <span className="text-gray-500 text-sm ml-2">— {level.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <span className="text-[#6366f1] text-base mt-0.5 shrink-0">{f.icon}</span>
              <div>
                <p className="text-white text-sm font-medium">{f.label}</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-gray-400 tracking-wider uppercase">{tag}</span>
          ))}
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

  const renderContent = () => {
    switch (activeWork.id) {
      case 'mission-control':
        return <MissionControlContent work={activeWork} />
      case 'bhoot-ai':
        return <BhootContent work={activeWork} />
      case 'cognx':
        return <CognXContent work={activeWork} />
      case 'pulse-case-study':
        return <PulseContent work={activeWork} />
      default:
        return <WhitepaperContent work={activeWork} />
    }
  }

  return (
    <section id="work" ref={sectionRef} className="py-16 md:py-20 bg-[#0a0a0f] relative overflow-hidden">
      <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold">Featured Work</p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#6366f1]/40 to-transparent" />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {featuredWorks.map((work) => (
              <button
                key={work.id}
                onClick={() => setActiveTab(work.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === work.id
                    ? 'bg-[#6366f1] text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                data-cursor-hover
              >
                {work.type === 'Product' ? work.title : work.type}
              </button>
            ))}
          </div>
        </div>

        {/* Active Work Content */}
        <div ref={contentRef} className="mb-14 md:mb-20">
          {renderContent()}
        </div>

        {/* Other Projects */}
        <div ref={otherRef} className="pt-16 border-t border-[#1f2937]">
          <h3 className="text-gray-500 text-xs tracking-[0.35em] uppercase font-semibold mb-10">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="project-card glass-card p-6 hover:border-[#6366f1]/30 transition-colors duration-300">
                <h4 className="font-bold text-xl text-white mb-3 tracking-tight">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-gray-400 tracking-wider uppercase">{t}</span>
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
