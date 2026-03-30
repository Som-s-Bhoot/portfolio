import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const taglineRef = useRef(null)
  const nameRef = useRef(null)
  const contentRef = useRef(null)
  const ctaRef = useRef(null)
  const headshotRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      if (taglineRef.current) {
        tl.from(taglineRef.current, {
          y: 20, opacity: 0, duration: 0.6, ease: 'power3.out',
        })
      }

      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll('.hero-char')
        tl.from(chars, {
          yPercent: 120, rotateX: -40, opacity: 0,
          duration: 1, ease: 'power4.out', stagger: 0.04,
        }, '-=0.4')
      }

      if (contentRef.current) {
        tl.from(contentRef.current, {
          y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        }, '-=0.5')
      }

      if (ctaRef.current) {
        tl.from(ctaRef.current.children, {
          y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        }, '-=0.4')
      }

      if (headshotRef.current) {
        tl.from(headshotRef.current, {
          opacity: 0, scale: 1.05, duration: 1.2, ease: 'power3.out',
        }, '-=1')
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const splitChars = (text) =>
    text.split('').map((char, i) => (
      <span key={i} className="hero-char inline-block" style={{ perspective: '600px' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#FAFAF7] flex items-center overflow-hidden">
      {/* Headshot — right side, full height */}
      <div
        ref={headshotRef}
        className="absolute right-0 top-0 bottom-0 w-[45%] md:w-[50%] lg:w-[48%] z-0"
      >
        <img
          src="/headshot.png"
          alt="Som Chakravarty"
          className="w-full h-full object-cover object-[center_15%]"
          loading="eager"
        />
        {/* Left edge fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #FAFAF7 0%, rgba(250,250,247,0.7) 30%, rgba(250,250,247,0.2) 60%, transparent 100%)'
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #FAFAF7 0%, rgba(250,250,247,0.5) 20%, transparent 50%)'
          }}
        />
        {/* Subtle warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(212,165,116,0.1) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content — left side */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 pt-24 md:pt-20">
        {/* Accent bar */}
        <div className="accent-bar mb-6"></div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#D4A574] mb-7"
        >
          Product × AI × UX
        </p>

        {/* Name — "Som" bold, "Chakravarty" light */}
        <div ref={nameRef}>
          <div className="overflow-hidden">
            <h1 className="hero-name text-[#1A1A1A] font-semibold" style={{ perspective: '600px' }}>
              {splitChars('Som')}
            </h1>
          </div>
          <div className="overflow-hidden mt-[-0.02em]">
            <h1 className="hero-name text-[#1A1A1A] font-light" style={{ perspective: '600px' }}>
              {splitChars('Chakravarty')}
            </h1>
          </div>
        </div>

        {/* Title with dot separator */}
        <div className="flex items-center gap-3.5 mt-7 text-[#3A3A3A] text-[19px] font-normal tracking-[0.01em]">
          <span>AI Systems Architect</span>
          <span className="w-[5px] h-[5px] rounded-full bg-[#D4A574]" />
          <span>Fractional Product Leader</span>
        </div>

        {/* Bio */}
        <p
          ref={contentRef}
          className="text-[#2D2D2D] text-lg font-normal leading-[1.75] max-w-[580px] mt-7"
        >
          I help B2B organizations build the products that matter — and the AI teams that accelerate them. 18 years of product and UX leadership. Now building autonomous AI systems that run research, marketing, development, and operations end-to-end.
        </p>

        {/* CTA pills */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-9 py-4 bg-[#1A1A1A] text-[#FAFAF7] text-sm font-medium tracking-[0.03em] rounded-[48px] hover:bg-[#3A3A3A] transition-colors"
            data-cursor-hover
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/somchakravarty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-9 py-4 border-[1.5px] border-[#D2D2D7] text-[#1A1A1A] text-sm font-medium tracking-[0.03em] rounded-[48px] hover:border-[#1A1A1A] transition-colors"
            data-cursor-hover
          >
            LinkedIn →
          </a>
        </div>

        {/* Credential ticker */}
        <div className="mt-12 flex flex-wrap items-center gap-2.5 text-[#5A5A5A] text-xs font-medium tracking-[0.04em]">
          <span>CMU HCI</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#C0C0C0]" />
          <span>18 Yrs Building Products</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#C0C0C0]" />
          <span>Ex-Director, Planview</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#C0C0C0]" />
          <span>AI Systems Architect</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#C0C0C0]" />
          <span>Bangalore</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[#86868B] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}
