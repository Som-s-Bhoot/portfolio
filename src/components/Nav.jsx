import { useState, useEffect, useCallback } from 'react'
import { Home, User, Briefcase, FolderOpen, PenTool, Mountain, Mail } from 'lucide-react'

const links = [
  { href: '#', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#work', label: 'Work', icon: FolderOpen },
  { href: '#writing', label: 'Writing', icon: PenTool },
  { href: '#adventures', label: 'Adventures', icon: Mountain },
  { href: '#contact', label: 'Contact', icon: Mail },
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
      {/* Desktop floating pill nav */}
      <nav className="pill-nav hidden sm:flex" role="navigation" aria-label="Main navigation">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = activeSection === link.href
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`pill-nav-btn ${isActive ? 'active' : ''}`}
              aria-label={link.label}
              title={link.label}
              data-cursor-hover
            >
              <Icon size={18} strokeWidth={2} />
            </a>
          )
        })}
      </nav>

      {/* Mobile: hamburger toggle */}
      <div className="sm:hidden fixed top-4 right-4 z-50">
        <button
          className="w-10 h-10 rounded-full bg-[#111827] border border-[#1f2937] shadow-lg flex flex-col justify-center items-center gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          <span
            className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <div className="flex flex-wrap justify-center gap-3 mb-10 w-full">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`w-14 h-14 rounded-full flex flex-col items-center justify-center gap-1 border transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#6366f1] text-white border-[#6366f1]'
                    : 'bg-[#111827] text-gray-400 border-[#1f2937] hover:bg-[#1f2937]'
                }`}
                aria-label={link.label}
                data-cursor-hover
              >
                <Icon size={20} strokeWidth={2} />
              </a>
            )
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          {links.map((link) => (
            <a
              key={`label-${link.href}`}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className="text-white text-lg font-semibold tracking-tight hover:text-[#6366f1] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
