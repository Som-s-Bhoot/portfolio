import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ═══ ICON RENDERER — image or emoji ═══ */
function FeatureIcon({ icon, className = '' }) {
  if (typeof icon === 'string' && icon.startsWith('/')) {
    return <img src={icon} alt="" className={`w-6 h-6 rounded object-cover shrink-0 ${className}`} />
  }
  return <span className={`shrink-0 ${className}`}>{icon}</span>
}

/* ═══ CAPABILITY BADGE ═══ */
function CapabilityBadges({ capabilities }) {
  if (!capabilities || capabilities.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {capabilities.map((cap) => (
        <span key={cap.label} className="inline-flex items-center gap-1.5 text-[10px] px-3 py-1 rounded-full bg-[#F5F5F0] text-[#5A5A5A] tracking-wider uppercase border border-[#E8E8ED]">
          <span>{cap.icon}</span>
          {cap.label}
        </span>
      ))}
    </div>
  )
}

/* ═══ FEATURED WORK DATA ═══ */
const featuredWorks = [
  {
    id: 'my-ai-team', title: 'Mission Control: My 10-Agent AI Team', type: 'My AI Team',
    capabilities: [{ icon: '🧠', label: 'Strategy' }, { icon: '⚡', label: 'AI' }, { icon: '🔧', label: 'Operations' }],
    description: 'Before I build your AI team, here\'s mine. I run a 10-agent autonomous system that handles research, marketing, content production, competitive intelligence, and daily operations — with minimal human intervention. This isn\'t a demo. It\'s been in production since early 2026.',
    agents: [
      { name: 'Bhoot', role: 'Chief of Staff', desc: 'Orchestrates all agents, manages handoffs, daily briefings, quality control' },
      { name: 'Dev', role: 'Engineer', desc: 'Writes code, ships features, runs CI/CD pipelines' },
      { name: 'Ari', role: 'Architect', desc: 'System design, technical decisions, architecture reviews' },
      { name: 'Ricky', role: 'Researcher', desc: 'Deep research, competitive intelligence, market analysis' },
      { name: 'Mark', role: 'Marketeer', desc: 'Content strategy, copywriting, SEO, campaign planning' },
      { name: 'Dean', role: 'Designer', desc: 'Visual design, carousels, brand assets' },
      { name: 'Pam', role: 'Project Manager', desc: 'Sprint planning, SLA tracking, status reporting' },
      { name: 'Quasi', role: 'QA/Tester', desc: 'Test plans, quality assurance, regression testing' },
      { name: 'Ravi', role: 'Reviewer', desc: 'Code review, PR analysis, quality gates' },
      { name: 'Tom', role: 'Trader', desc: 'Portfolio monitoring, market analysis' },
    ],
    outputs: [
      'Full competitive intelligence reports — 4 markets analyzed in one week',
      '3-post/week LinkedIn content pipeline — fully orchestrated end-to-end',
      'Sprint-based development — stories flow through design → dev → test → review → ship',
      'Daily automated briefings — every morning, a summary of all agent activity',
    ],
    features: [
      { icon: '🤖', label: 'Memory & Context', desc: 'Agents maintain memory across sessions with specialized skills and defined handoff protocols.' },
      { icon: '🔄', label: 'Autonomous Handoffs', desc: 'When the researcher finishes analysis, the marketeer picks it up. No human in the loop for routine operations.' },
      { icon: '📊', label: 'Real Outputs', desc: 'Competitive intel, LinkedIn content, sprint delivery, daily briefs — all running in production.' },
      { icon: '🏗️', label: 'Production Infrastructure', desc: 'Built on OpenClaw with Slack integration, persistent memory, structured orchestration, and full audit trails.' },
    ],
    tags: ['Multi-Agent Systems', 'Orchestration', 'Production AI', 'OpenClaw'],
  },
  {
    id: 'cognx', title: 'CognX', type: 'CognX',
    capabilities: [{ icon: '🧠', label: 'Strategy' }, { icon: '⚡', label: 'AI' }, { icon: '💻', label: 'Engineering' }],
    description: 'Built a full AI-native SaaS product from zero to production in 6 weeks — then killed it. CognX was an AI Chief of Staff that lived inside Slack. The decision to stop wasn\'t failure — it was strategic clarity.',
    images: [
      { src: '/cognx-morning-brief.png', alt: 'CognX Morning Brief', size: 'large' },
      { src: '/cognx-contextual-qa.png', alt: 'CognX Contextual Q&A', size: 'small' },
      { src: '/cognx-onboarding.png', alt: 'CognX Onboarding', size: 'small' },
      { src: '/cognx-welcome.png', alt: 'CognX Welcome', size: 'small' },
    ],
    timeline: [
      { phase: 'Week 1–2', text: 'Foundation — OAuth, Slack integration, RAG pipeline', stat: '3 phases shipped', color: 'green' },
      { phase: 'Week 3–4', text: 'Graph-augmented RAG, work item materialization, billing', stat: '275 tests', color: 'blue' },
      { phase: 'Week 5', text: '10X Sprint — 8 features overnight', stat: '488+ tests · 0 regressions', color: 'orange' },
      { phase: 'Week 6', text: 'Iron Dome — 66 E2E tests, 36 DeepEval evals', stat: '693 total tests', color: 'purple' },
      { phase: 'Decision', text: 'Killed with conviction — platform AI owns the data', stat: null, color: 'red' },
    ],
    insight: {
      title: 'Why I Killed It',
      levels: [
        { label: 'Built in 6 weeks', desc: 'Speed is no longer a moat', color: 'green' },
        { label: 'Platform AI launching', desc: 'Data owners win; middleware gets squeezed', color: 'blue' },
        { label: 'Kill decision', desc: 'Strategic clarity > sunk cost fallacy', color: 'purple' },
      ],
    },
    features: [
      { icon: '/images/icon-zero-to-prod.png', label: 'Zero to Production in 6 Weeks', desc: 'Sole PM and technical architect. 693 tests — with a 10-agent AI dev team.' },
      { icon: '/images/icon-ai-native.png', label: 'AI-Native Architecture', desc: 'Conversation memory, proactive alerts, structured query routing.' },
      { icon: '/images/icon-iron-dome.png', label: 'Iron Dome Quality System', desc: '66-test E2E suite plus 36 DeepEval tests for RAG quality.' },
      { icon: '/images/icon-kill-decision.png', label: 'The Kill Decision', desc: 'Platform AI owns both the data and distribution. Moats are non-technical now.' },
    ],
    consultingConnector: 'The same architectural thinking behind CognX is what I bring to client engagements. The kill decision proved I optimize for outcomes, not sunk costs.',
    tags: ['Next.js', 'Supabase', 'Inngest', 'RAG / LLM', 'Paddle', 'Slack API'],
  },
  {
    id: 'mission-control', title: 'Mission Control', type: 'Product',
    capabilities: [{ icon: '🧠', label: 'Strategy' }, { icon: '🎨', label: 'Design' }, { icon: '⚡', label: 'AI' }],
    description: 'A second-brain app built from scratch — product strategy, UX architecture, and AI integration all in one.',
    images: [
      { src: '/mc-kanban.png', alt: 'Mission Control Kanban board', size: 'large' },
      { src: '/mc-documents.png', alt: 'Mission Control Documents', size: 'small' },
      { src: '/mc-overview.png', alt: 'Mission Control Overview', size: 'small' },
    ],
    features: [
      { icon: '/images/icon-ai-collab.png', label: 'AI Agent Collaboration', desc: 'Built-in AI that reads context, creates content, and acts on tasks' },
      { icon: '/images/icon-info-arch.png', label: 'Information Architecture', desc: 'Documents + Kanban unified under a coherent mental model' },
      { icon: '/images/icon-realtime.png', label: 'Real-Time Experience', desc: 'Optimistic UI, cross-platform sync, instant feedback loops' },
      { icon: '/images/icon-design-system.png', label: 'Design System', desc: 'Consistent component library with accessibility built-in' },
    ],
    tags: ['React 19', 'Supabase', 'Tailwind', 'AI / LLM'],
  },
  {
    id: 'tripartite-whitepaper', title: 'The Tripartite Architecture of Product Value', type: 'Whitepaper',
    capabilities: [{ icon: '🧠', label: 'Strategy' }],
    description: 'A definitive analysis of Actual, Perceived, and Relative Value drivers in Strategic Product Management.',
    coverImage: '/whitepaper-cover.png',
    features: [
      { icon: '/images/icon-actual-value.png', label: 'Actual Value', desc: 'Functional utility, reliability, and efficiency' },
      { icon: '/images/icon-perceived-value.png', label: 'Perceived Value', desc: 'Brand perception, UX quality, emotional resonance' },
      { icon: '/images/icon-relative-value.png', label: 'Relative Value', desc: 'Competitive positioning and market context' },
    ],
    cta: { label: 'Download PDF', url: '/tripartite-whitepaper.pdf', icon: 'download' },
    tags: ['Product Strategy', 'Value Framework', 'AI-Assisted'],
  },

  {
    id: 'pulse-case-study', title: 'PULSE — AI Disrupts Inventory', type: 'Pulse',
    capabilities: [{ icon: '🧠', label: 'Strategy' }, { icon: '⚡', label: 'AI' }],
    description: 'A strategic teardown of the $5B inventory management market. An AI that IS the interface, handling 80% of decisions autonomously.',
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
      { icon: '/images/icon-conversation.png', label: 'Conversation, Not Navigation', desc: 'Primary interface is natural language.' },
      { icon: '/images/icon-proactive.png', label: 'Proactive, Not Reactive', desc: 'Monitors, predicts, and alerts.' },
      { icon: '/images/icon-autonomous.png', label: 'Autonomous with Guardrails', desc: 'Define rules once. Pulse handles the rest.' },
      { icon: '/images/icon-context-aware.png', label: 'Context-Aware Intelligence', desc: 'Understands your business, not just inventory.' },
    ],
    tags: ['Product Strategy', 'AI Architecture', 'Market Analysis', 'UX Concept'],
  },
  {
    id: 'planview-covid', title: 'Planview — Leading Through COVID', type: 'Planview',
    capabilities: [{ icon: '🧠', label: 'Strategy' }, { icon: '👥', label: 'Product Leadership' }],
    description: 'When COVID-19 forced the world remote, I led two initiatives that turned a disruption into a competitive advantage.',
    features: [
      { icon: '/images/icon-zoom.png', label: 'Zoom Integration', desc: 'Integrated Zoom directly into Planview products.' },
      { icon: '/images/icon-whiteboard.png', label: 'Real-Time Whiteboarding', desc: 'Collaborative whiteboards that mimicked physical brainstorming.' },
      { icon: '/images/icon-adoption.png', label: 'Day-One Adoption', desc: 'Both solutions embraced immediately by customers.' },
      { icon: '/images/icon-portfolio-impact.png', label: 'Portfolio-Wide Impact', desc: 'Capabilities rolled out across the broader product portfolio.' },
    ],
    insight: {
      title: 'The Insight',
      levels: [
        { label: 'Anticipation', desc: 'Saw the collaboration gap before customers felt it', color: 'green' },
        { label: 'Execution', desc: 'Two products shipped, adopted from day one', color: 'blue' },
        { label: 'Amplification', desc: 'Solutions expanded across the entire product portfolio', color: 'purple' },
      ],
    },
    tags: ['Product Strategy', 'Enterprise SaaS', 'COVID Response', 'Collaboration'],
  },
]

const otherProjects = [
  { title: 'Portfolio Site', desc: 'This very site — built with Vite, React, GSAP, and Tailwind. Scandinavian minimalist design.', tech: ['React', 'GSAP', 'Lenis', 'Tailwind'] },
  { title: 'Arduino/RPi Projects', desc: 'Hardware tinkering — sensor systems, home automation, 3D-printed enclosures on a Bambu Lab A1.', tech: ['Arduino', 'Raspberry Pi', '3D Printing'] },
]

/* ═══ MISSION CONTROL CONTENT ═══ */
function MissionControlContent({ work }) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      <div className="lg:col-span-8">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-[#E8E8ED] shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img src={work.images[0].src} alt={work.images[0].alt} className="w-full h-auto block" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {work.images.slice(1).map((img) => (
              <div key={img.alt} className="rounded-2xl overflow-hidden border border-[#E8E8ED] shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img src={img.src} alt={img.alt} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col justify-center">
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-[#1A1A1A] mb-4">{work.title}</h2>
        <p className="text-[#3A3A3A] text-base leading-relaxed mb-8 max-w-lg font-normal">{work.description}</p>
        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <FeatureIcon icon={f.icon} className="text-[#D4A574] text-base mt-0.5" />
              <div>
                <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                <p className="text-[#5A5A5A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {work.cta && (
            <a href={work.cta.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white text-xs tracking-[0.1em] uppercase rounded-[48px] hover:bg-[#48484A] transition-colors" data-cursor-hover>
              {work.cta.label}
            </a>
          )}
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══ WHITEPAPER CONTENT ═══ */
function WhitepaperContent({ work }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <a href={work.cta.url} target="_blank" rel="noopener noreferrer" className="block group" data-cursor-hover>
          <div className="relative bg-gradient-to-br from-[#F5F5F0] to-[#E8E8ED] rounded-2xl p-8 md:p-12 overflow-hidden">
            <img src={work.coverImage} alt="Whitepaper Cover" className="w-full max-w-md mx-auto rounded-sm shadow-xl group-hover:scale-[1.02] transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-[#1D1D1F] px-5 py-2.5 rounded-full text-xs text-white shadow-lg flex items-center gap-2 font-medium">Read PDF</span>
            </div>
          </div>
        </a>
      </div>
      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-[#1A1A1A] mb-4">{work.title}</h2>
        <p className="text-[#3A3A3A] text-base leading-relaxed mb-8 max-w-lg font-normal">{work.description}</p>
        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <FeatureIcon icon={f.icon} className="text-[#D4A574] text-base mt-0.5" />
              <div>
                <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                <p className="text-[#5A5A5A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={work.cta.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white text-xs tracking-[0.1em] uppercase rounded-[48px] hover:bg-[#48484A] transition-colors" data-cursor-hover>
            {work.cta.label}
          </a>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══ BHOOT CONTENT ═══ */
function BhootContent({ work }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div>
        <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2D] rounded-2xl p-8 md:p-10 text-white border border-[#3A3A3A]">
          <div className="text-center mb-8">
            <span className="text-5xl mb-3 block">👻</span>
            <h3 className="text-lg font-medium tracking-tight">Bhoot Architecture</h3>
          </div>
          <div className="space-y-4">
            {work.architecture.map((tier, idx) => (
              <div key={tier.layer}>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">{tier.layer}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 border border-white/5">{item}</span>
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
        <h2 className="display-medium text-[#1A1A1A] mb-4">{work.title}</h2>
        <p className="text-[#3A3A3A] text-base leading-relaxed mb-8 max-w-lg font-normal">{work.description}</p>
        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <FeatureIcon icon={f.icon} className="text-[#D4A574] text-base mt-0.5" />
              <div>
                <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                <p className="text-[#5A5A5A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
        </div>
      </div>
    </div>
  )
}

/* ═══ COGNX CONTENT ═══ */
function CognXContent({ work }) {
  const timelineColors = { green: '#22c55e', blue: '#3b82f6', orange: '#f97316', purple: '#a855f7', red: '#ef4444' }
  const insightColors = { green: { dot: '#22c55e' }, blue: { dot: '#3b82f6' }, purple: { dot: '#a855f7' } }

  return (
    <div className="space-y-16">
      <div>
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-[#E8E8ED] shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img src={work.images[0].src} alt={work.images[0].alt} className="w-full h-auto block" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {work.images.slice(1).map((img) => (
              <div key={img.alt} className="rounded-2xl overflow-hidden border border-[#E8E8ED] shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img src={img.src} alt={img.alt} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2D] rounded-2xl p-8 md:p-10 text-white">
          <div className="text-center mb-8">
            <span className="text-5xl mb-3 block">🧠</span>
            <h3 className="text-lg font-medium tracking-tight">Build Timeline</h3>
          </div>
          <div className="space-y-0">
            {work.timeline.map((step, idx) => (
              <div key={step.phase} className="flex items-start gap-4 relative pb-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full mt-1.5" style={{ background: timelineColors[step.color] }} />
                  {idx < work.timeline.length - 1 && <div className="w-0.5 flex-1 mt-1 bg-white/10" style={{ minHeight: '2rem' }} />}
                </div>
                <div className="pb-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] mb-0.5">{step.phase}</p>
                  <p className="text-[13px] text-gray-200 leading-relaxed">{step.text}</p>
                  {step.stat && <span className="inline-block text-[11px] px-2.5 py-1 rounded-lg bg-white/10 text-gray-400 border border-white/5 mt-1.5">{step.stat}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-5 border-t border-white/10 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-red-400 px-5 py-2 border border-red-400/30 rounded-full bg-red-400/10">
              ⚰️ Killed — Strategic Exit
            </span>
          </div>
        </div>
        <div>
          <CapabilityBadges capabilities={work.capabilities} />
          <h2 className="display-medium text-[#1A1A1A] mb-4">{work.title}</h2>
          <p className="text-[#3A3A3A] text-base leading-relaxed mb-8 max-w-lg font-normal">{work.description}</p>
          <div className="space-y-5 mb-8">
            {work.features.map((f) => (
              <div key={f.label} className="flex gap-4">
                <FeatureIcon icon={f.icon} className="text-[#1A1A1A] text-base mt-0.5" />
                <div>
                  <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                  <p className="text-[#5A5A5A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-8 p-5 bg-[#F5F5F0] rounded-xl border border-[#E8E8ED]">
            <p className="text-xs text-[#5A5A5A] uppercase tracking-widest mb-4">{work.insight.title}</p>
            <div className="space-y-3">
              {work.insight.levels.map((level) => (
                <div key={level.label} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: insightColors[level.color]?.dot || '#86868B' }} />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-[#1A1A1A]">{level.label}</span>
                    <span className="text-[#5A5A5A] text-sm ml-2">— {level.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
          </div>
          {work.consultingConnector && (
            <div className="mt-8 p-5 rounded-xl border border-[#D4A574]/30 bg-[#D4A574]/[0.05]">
              <p className="text-[10px] text-[#D4A574] uppercase tracking-[0.2em] mb-2 font-semibold">→ What this means for you</p>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">{work.consultingConnector}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ═══ MY AI TEAM CONTENT ═══ */
function MyAITeamContent({ work }) {
  const agentImages = {
    'Bhoot': '/images/agent-bhoot-light.png', 'Dev': '/images/agent-dev-light.png', 'Ari': '/images/agent-ari-light.png',
    'Ricky': '/images/agent-ricky-light.png', 'Mark': '/images/agent-mark-light.png', 'Dean': '/images/agent-dean-light.png',
    'Pam': '/images/agent-pam-light.png', 'Quasi': '/images/agent-quasi-light.png', 'Ravi': '/images/agent-ravi-light.png', 'Tom': '/images/agent-tom-light.png',
  }
  const featureImages = {
    '🤖': '/images/feature-memory-light.png', '🔄': '/images/feature-handoffs-light.png',
    '📊': '/images/feature-outputs-light.png', '🏗️': '/images/feature-infrastructure-light.png',
  }

  return (
    <div className="space-y-12">
      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-light tracking-[-0.03em] leading-[1] text-[#1A1A1A] whitespace-nowrap">{work.title}</h2>
          <span className="inline-flex items-center gap-1.5 text-[10px] px-3 py-1 rounded-full bg-green-50 text-green-700 tracking-wider uppercase border border-green-200 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live — Running Daily
          </span>
        </div>
        <p className="text-[#2D2D2D] text-base md:text-lg leading-[1.75] max-w-3xl font-normal">{work.description}</p>
      </div>

      <div>
        <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-6">The Team</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {work.agents.map((agent) => (
            <div key={agent.name} className="nordic-card p-4 hover:shadow-lg transition-shadow duration-300">
              <img src={agentImages[agent.name] || '/images/agent-dev.png'} alt={`${agent.name} — ${agent.role}`}
                className="w-12 h-12 rounded-lg mb-2 object-cover" />
              <p className="text-[#1A1A1A] text-sm font-medium">{agent.name}</p>
              <p className="text-[#D4A574] text-[10px] tracking-wider uppercase mb-2">{agent.role}</p>
              <p className="text-[#5A5A5A] text-xs leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-6">Real Outputs</p>
          <div className="space-y-4">
            {work.outputs.map((output) => (
              <div key={output} className="flex items-start gap-3">
                <div className="w-[18px] h-[18px] rounded-full bg-[#D4A574] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</div>
                <p className="text-[#2D2D2D] text-sm leading-relaxed">{output}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#1A1A1A] text-xs tracking-[0.18em] uppercase font-semibold mb-6">How It Works</p>
          <div className="space-y-5">
            {work.features.map((f) => (
              <div key={f.label} className="flex gap-4 nordic-card p-4">
                <img src={featureImages[f.icon] || '/images/feature-memory.png'} alt={f.label}
                  className="w-10 h-10 rounded-lg mt-0.5 shrink-0 object-cover" />
                <div>
                  <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                  <p className="text-[#3A3A3A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-2xl border border-[#D4A574]/20 bg-[#D4A574]/[0.05] text-center">
        <p className="text-[#2D2D2D] text-base md:text-lg leading-[1.75] max-w-2xl mx-auto font-normal">
          This system doesn't just execute tasks. Agents have memory, specialized skills, defined handoff protocols, and accountability.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
      </div>
    </div>
  )
}

/* ═══ PULSE CONTENT ═══ */
function PulseContent({ work }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div>
        <div className="rounded-2xl overflow-hidden border border-[#E8E8ED] shadow-lg bg-white">
          <img src={work.mockupImage} alt="PULSE AI Inventory Mockup" className="w-full h-auto block" />
        </div>
      </div>
      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-[#1A1A1A] mb-4">{work.title}</h2>
        <p className="text-[#3A3A3A] text-base leading-relaxed mb-8 max-w-lg font-normal">{work.description}</p>
        <div className="mb-8 p-5 nordic-card">
          <p className="text-xs text-[#5A5A5A] uppercase tracking-widest mb-4">{work.insight.title}</p>
          <div className="space-y-3">
            {work.insight.levels.map((level) => (
              <div key={level.label} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${level.color === 'purple' ? 'bg-purple-500' : level.color === 'blue' ? 'bg-blue-400' : 'bg-gray-400'}`} />
                <div className="flex-1">
                  <span className={`text-sm font-medium ${level.color === 'purple' ? 'text-purple-600' : 'text-[#1A1A1A]'}`}>{level.label}</span>
                  <span className="text-[#5A5A5A] text-sm ml-2">— {level.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <FeatureIcon icon={f.icon} className="text-[#D4A574] text-base mt-0.5" />
              <div>
                <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                <p className="text-[#5A5A5A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
        </div>
      </div>
    </div>
  )
}

/* ═══ PLANVIEW CONTENT ═══ */
function PlanviewContent({ work }) {
  const insightColors = { green: '#22c55e', blue: '#3b82f6', purple: '#a855f7' }
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div>
        <CapabilityBadges capabilities={work.capabilities} />
        <h2 className="display-medium text-[#1A1A1A] mb-4">{work.title}</h2>
        <p className="text-[#3A3A3A] text-base leading-relaxed mb-8 max-w-lg font-normal">{work.description}</p>
        <div className="space-y-5 mb-8">
          {work.features.map((f) => (
            <div key={f.label} className="flex gap-4">
              <FeatureIcon icon={f.icon} className="text-[#D4A574] text-base mt-0.5" />
              <div>
                <p className="text-[#1A1A1A] text-sm font-medium">{f.label}</p>
                <p className="text-[#5A5A5A] text-sm mt-0.5 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (<span key={tag} className="text-[9px] px-3 py-1.5 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{tag}</span>))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="p-8 md:p-10 bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2D] rounded-2xl border border-[#3A3A3A]">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">{work.insight.title}</p>
          <div className="space-y-6">
            {work.insight.levels.map((level, idx) => (
              <div key={level.label} className="flex items-start gap-4 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-3 h-3 rounded-full mt-0.5" style={{ background: insightColors[level.color] }} />
                  {idx < work.insight.levels.length - 1 && <div className="w-0.5 flex-1 mt-1 bg-white/10" style={{ minHeight: '2rem' }} />}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{level.label}</p>
                  <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{level.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══ MAIN COMPONENT ═══ */
export default function CaseStudy() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState(featuredWorks[0].id)
  const otherRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (otherRef.current) {
        // No ScrollTrigger — animate immediately so cards are always visible
        // This prevents the "blank screen" issue when switching from a short tab
        gsap.from(otherRef.current.querySelectorAll('.project-card'), {
          y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: otherRef.current, start: 'top 95%', toggleActions: 'play none none none' },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Refresh ScrollTrigger when tab changes so positions recalculate for new content height
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  const activeWork = featuredWorks.find((w) => w.id === activeTab)

  const renderContent = () => {
    switch (activeWork.id) {
      case 'my-ai-team': return <MyAITeamContent work={activeWork} />
      case 'mission-control': return <MissionControlContent work={activeWork} />

      case 'cognx': return <CognXContent work={activeWork} />
      case 'pulse-case-study': return <PulseContent work={activeWork} />
      case 'planview-covid': return <PlanviewContent work={activeWork} />
      default: return <WhitepaperContent work={activeWork} />
    }
  }

  return (
    <section id="work" ref={sectionRef} className="py-[120px] bg-[#FAFAF7] relative overflow-hidden">
      <div className="w-full px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-bar"></div>
            <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold">Featured Work</p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4A574]/40 to-transparent" />
          </div>
          <p className="text-[#3A3A3A] text-lg md:text-xl mb-6 max-w-2xl leading-[1.75] font-normal">
            Selected projects and case studies — from enterprise product leadership to AI-native builds.
          </p>

          {/* Work tabs — pill style */}
          <div className="flex flex-wrap gap-3">
            {featuredWorks.map((work) => (
              <button
                key={work.id}
                onClick={() => setActiveTab(work.id)}
                className={`px-5 py-2.5 rounded-[24px] text-[13px] font-medium transition-all duration-300 ${
                  activeTab === work.id
                    ? 'bg-[#1D1D1F] text-[#FAFAF7] border border-[#1D1D1F]'
                    : 'bg-transparent text-[#5A5A5A] hover:text-[#1A1A1A] border border-[#E8E8ED] hover:border-[#1A1A1A]'
                }`}
                data-cursor-hover
              >
                {work.type === 'Product' ? work.title : work.type}
              </button>
            ))}
          </div>
        </div>

        {/* Active Work Content — no extra bottom margin so shorter tabs don't create scroll gaps */}
        <div className="mb-0">
          {renderContent()}
        </div>

        {/* Other Projects */}
        <div ref={otherRef} className="pt-12 mt-12 border-t border-[#E8E8ED]">
          <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-10">Other Projects</p>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="project-card nordic-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-medium text-xl text-[#1A1A1A] mb-3 tracking-tight">{project.title}</h4>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4 font-normal">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-3 py-1 rounded-[20px] bg-[#F5F5F0] border border-[#E8E8ED] text-[#5A5A5A] tracking-wider uppercase">{t}</span>
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
