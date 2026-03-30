import { useState, useEffect, useCallback } from 'react'

const links = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#adventures', label: 'Adventures' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState('#')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ['about', 'services', 'work', 'writing', 'adventures', 'contact']
    const observers = []

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        })
        observer.observe(el)
        observers.push(observer)
      }
    })

    const onScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('#')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = useCallback((href) => {
    setMobileOpen(false)
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      {/* Desktop frosted glass nav */}
      <nav className="frosted-nav hidden sm:flex" role="navigation" aria-label="Main navigation">
        <a
          href="#"
          onClick={() => handleClick('#')}
          className="font-semibold text-[15px] tracking-[0.04em] text-[#1A1A1A] uppercase"
          data-cursor-hover
        >
          Som Chakravarty
        </a>
        <div className="flex items-center gap-9">
          {links.filter(l => l.href !== '#').map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-[13px] font-medium tracking-[0.03em] transition-colors duration-200 ${
                activeSection === link.href ? 'text-[#1A1A1A]' : 'text-[#5A5A5A] hover:text-[#1A1A1A]'
              }`}
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile: hamburger toggle */}
      <div className="sm:hidden fixed top-4 right-4 z-50">
        <button
          className="w-10 h-10 rounded-full bg-white border border-[#E8E8ED] shadow-sm flex flex-col justify-center items-center gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          <span
            className={`block h-[1.5px] w-4 bg-[#1A1A1A] transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] w-4 bg-[#1A1A1A] transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <div className="flex flex-col items-center gap-4 w-full">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-2xl font-light tracking-tight transition-colors ${
                activeSection === link.href ? 'text-[#D4A574]' : 'text-[#1A1A1A] hover:text-[#D4A574]'
              }`}
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
