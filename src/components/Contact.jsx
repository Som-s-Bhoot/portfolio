import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const linksRef = useRef(null)
  const detailsRef = useRef(null)
  const tracksRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scale: 0.8, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      if (tracksRef.current) {
        gsap.from(tracksRef.current.children, {
          y: 25, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: tracksRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }

      if (linksRef.current) {
        gsap.from(linksRef.current.children, {
          y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: linksRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }

      if (detailsRef.current) {
        gsap.from(detailsRef.current.children, {
          y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: detailsRef.current, start: 'top 95%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-[120px] bg-[#FAFAF7] relative overflow-hidden">
      <div className="relative w-full px-6 md:px-16 text-center max-w-[1280px] mx-auto">
        <div className="accent-bar mx-auto mb-5"></div>
        <p className="text-[#D4A574] text-xs tracking-[0.18em] uppercase font-semibold mb-6">Get in Touch</p>

        <h2 ref={titleRef} className="text-[60px] font-light tracking-[-0.03em] text-[#1A1A1A] mb-5">
          Let's build.
        </h2>

        <p className="text-[#2D2D2D] text-lg font-normal max-w-[560px] mx-auto leading-[1.7] mb-10">
          Whether you need a product leader to sharpen your team's execution or an AI architect to build autonomous systems — I do both. Currently taking on 1–2 engagements.
        </p>

        {/* Contact links - pill buttons */}
        <div ref={linksRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="mailto:som@somchakravarty.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-[#FAFAF7] text-sm font-medium rounded-[48px] hover:bg-[#48484A] transition-colors tracking-[0.03em]"
            data-cursor-hover>
            Start a Conversation
          </a>
          <a href="tel:+919740612224"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E8ED] text-[#1D1D1F] text-sm font-medium rounded-[48px] hover:border-[#1D1D1F] transition-colors tracking-[0.03em]"
            data-cursor-hover>
            +91-9740612224
          </a>
          <a href="https://www.linkedin.com/in/somchakravarty/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E8ED] text-[#1D1D1F] text-sm font-medium rounded-[48px] hover:border-[#1D1D1F] transition-colors tracking-[0.03em]"
            data-cursor-hover>
            LinkedIn
          </a>
        </div>

        {/* Metadata row */}
        <div ref={detailsRef} className="flex justify-center gap-12 flex-wrap">
          {[
            { label: 'Location', value: 'Bangalore, India' },
            { label: 'Availability', value: '1–2 engagements' },
            { label: 'Remote', value: 'Worldwide' },
            { label: 'Timezone', value: 'IST (UTC+5:30)' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#5A5A5A] mb-1.5">{item.label}</p>
              <p className="text-[15px] font-medium text-[#1A1A1A]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
