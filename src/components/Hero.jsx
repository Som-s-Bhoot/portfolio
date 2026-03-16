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
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
      }

      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll('.hero-char')
        tl.from(chars, {
          yPercent: 120,
          rotateX: -40,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.04,
        }, '-=0.4')
      }

      if (contentRef.current) {
        tl.from(contentRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
      }

      if (ctaRef.current) {
        tl.from(ctaRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        }, '-=0.4')
      }

      if (headshotRef.current) {
        tl.from(headshotRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: 'power3.out',
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
    <section ref={containerRef} className="relative min-h-screen bg-[#0a0a0f] flex items-center overflow-hidden">
      {/* Large headshot — right side, full height, behind text */}
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
        {/* Left edge fade — blends photo into dark background */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to right, #0a0a0f 0%, rgba(10,10,15,0.7) 30%, rgba(10,10,15,0.2) 60%, transparent 100%)'
          }}
        />
        {/* Bottom fade */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.5) 20%, transparent 50%)'
          }}
        />
        {/* Subtle indigo/purple glow */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'radial-gradient(ellipse at 60% 40%, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)'
          }}
        />
      </div>

      {/* Content — left side, on top of everything */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 pt-24 md:pt-20">
        {/* Tagline */}
        <p 
          ref={taglineRef}
          className="text-xs tracking-[0.4em] uppercase font-semibold mb-6 md:mb-8"
        >
          <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Product × UX × AI
          </span>
        </p>

        {/* Name — overlaps the photo */}
        <div ref={nameRef}>
          <div className="overflow-hidden">
            <h1 className="hero-name text-white" style={{ perspective: '600px' }}>
              {splitChars('SOM')}
            </h1>
          </div>
          <div className="overflow-hidden mt-[-0.02em]">
            <h1 className="hero-name text-white whitespace-nowrap" style={{ perspective: '600px' }}>
              {splitChars('CHAKRAVARTY')}
            </h1>
          </div>
        </div>

        {/* Description */}
        <p 
          ref={contentRef}
          className="text-gray-400 text-base md:text-lg leading-[1.75] max-w-lg mt-8 md:mt-10"
        >
          Product Leader with 18 years across UX design, product management, and AI. Carnegie Mellon HCI '14. Currently building AI-powered infrastructure from Bangalore.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="mt-8 md:mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#6366f1] text-white text-sm font-semibold rounded-full hover:bg-[#4f46e5] transition-colors tracking-wide"
            data-cursor-hover
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/somchakravarty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 text-sm font-medium rounded-full hover:border-white hover:text-white transition-colors tracking-wide"
            data-cursor-hover
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Credential badges */}
        <div className="mt-8 md:mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[#6366f1]/70 text-[10px] tracking-[0.25em] uppercase">
          <span>Carnegie Mellon HCI&apos;14</span>
          <span>·</span>
          <span>Ex-Director of Product</span>
          <span>·</span>
          <span>Enterprise SaaS</span>
          <span>·</span>
          <span>Bangalore, India</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}
