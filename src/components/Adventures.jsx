import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Adventure data ── */
const adventures = [
  {
    id: 'norway',
    name: 'Norway & Sweden',
    category: 'Motorcycle Expedition',
    youtubeId: 'ERWZ3BzMXT8',
    url: 'https://youtu.be/ERWZ3BzMXT8?si=8iuALC5hyfl8jgec',
  },
  {
    id: 'ebc',
    name: 'Everest Base Camp',
    category: 'Mountaineering',
    youtubeId: 'h_pbYScQkxE',
    url: 'https://youtu.be/h_pbYScQkxE?si=rXC2XYYRc574ywh6',
  },
  {
    id: 'kilimanjaro',
    name: 'Kilimanjaro',
    category: 'Mountaineering',
    image: '/kilimanjaro.jpg',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    category: 'Motorcycle Expedition',
    youtubeId: 'htic4FnpUSw',
    url: 'https://youtu.be/htic4FnpUSw?si=TFIjZm3ZT7L0oaWM',
  },
  {
    id: 'spiti-zanskar',
    name: 'Spiti & Zanskar',
    category: 'Motorcycle Expedition',
    images: ['/spiti-1.jpg', '/spiti-2.jpg', '/spiti-3.jpg'],
  },
  {
    id: 'montblanc',
    name: 'Mont Blanc',
    category: 'Mountaineering',
    youtubeId: 'GOup-1qqo7k',
    url: 'https://youtu.be/GOup-1qqo7k',
  },
]

const hobbies = [
  { label: 'Adventure Motorcycling', detail: 'Life goal: ride around the world' },
  { label: 'Mountaineering', detail: 'Kilimanjaro · Mont Blanc · EBC' },
  { label: 'Strength Training', detail: 'Hate cardio · Working on consistency' },
  { label: 'Chess', detail: 'Regular player · Strategy thinking' },
  { label: '3D Printing', detail: 'Bambu Lab A1 · Hobby projects & prototypes' },
  { label: 'Woodworking & Pottery', detail: 'Learned from proper teachers · Not active lately' },
  { label: 'Electronics Tinkering', detail: 'Arduino · Raspberry Pi · Sensor projects' },
  { label: 'Philosophy', detail: 'Enjoys ruminating on ideas about identity, meaning, work' },
]

/* Grid is hardcoded in JSX below for Tailwind class detection */

function getImageUrl(adventure) {
  if (adventure.youtubeId) return `https://img.youtube.com/vi/${adventure.youtubeId}/maxresdefault.jpg`
  if (adventure.image) return adventure.image
  if (adventure.images?.[0]) return adventure.images[0]
  return null
}

/* ── Photo Card ── */
function PhotoCard({ adventure, aspect, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  }, [index])

  const imageUrl = getImageUrl(adventure)
  const Wrapper = adventure.url ? 'a' : 'div'
  const wrapperProps = adventure.url
    ? { href: adventure.url, target: '_blank', rel: 'noopener noreferrer', 'data-cursor-hover': true }
    : {}

  return (
    <Wrapper ref={cardRef} className="group block" {...wrapperProps}>
      <div className={`relative ${aspect} rounded-2xl overflow-hidden bg-gray-800`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={adventure.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-hero-text/30">
            <span className="text-xs tracking-wider uppercase">Coming Soon</span>
          </div>
        )}
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-[10px] tracking-widest uppercase font-medium">
          {adventure.category}
        </div>
        {/* Adventure name inside card */}
        <h4 className="absolute bottom-4 left-4 right-4 font-bold text-lg text-white tracking-tight">
          {adventure.name}
        </h4>
      </div>
    </Wrapper>
  )
}

/* ── Main Component ── */
export default function Adventures() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hobbiesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })

      if (hobbiesRef.current) {
        gsap.from(hobbiesRef.current.querySelectorAll('.hobby-item'), {
          x: -30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: { trigger: hobbiesRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="adventures" ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden bg-hero-bg">
      <div className="w-full px-6 md:px-10 relative z-10">
        <div ref={titleRef} className="mb-10 md:mb-14 max-w-[850px] mx-auto">
          <p className="text-[#6366f1] text-xs tracking-[0.35em] uppercase font-semibold mb-4">Beyond Work</p>
          <h2 className="display-medium text-gray-100">Life off-screen.</h2>
          <p className="text-hero-text/40 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            When I'm not building products, I'm on a motorcycle heading somewhere remote,
            climbing something tall, or tinkering with hardware in the workshop.
          </p>
        </div>

        {/* ── Masonry Photo Grid ── */}
        <div className="space-y-5 mb-12 md:mb-16 max-w-[850px] mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <PhotoCard adventure={adventures[0]} aspect="aspect-[4/3]" index={0} />
            </div>
            <div className="col-span-2">
              <PhotoCard adventure={adventures[1]} aspect="aspect-[3/4]" index={1} />
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-2">
              <PhotoCard adventure={adventures[2]} aspect="aspect-[3/4]" index={2} />
            </div>
            <div className="col-span-3">
              <PhotoCard adventure={adventures[3]} aspect="aspect-[4/3]" index={3} />
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <PhotoCard adventure={adventures[4]} aspect="aspect-[4/3]" index={4} />
            </div>
            <div className="col-span-2">
              <PhotoCard adventure={adventures[5]} aspect="aspect-[3/4]" index={5} />
            </div>
          </div>
        </div>

        {/* ── Hobbies & Interests ── */}
        <div ref={hobbiesRef} className="max-w-4xl mx-auto">
          <h3 className="text-hero-text/40 text-xs tracking-[0.35em] uppercase font-semibold mb-8">Hobbies & Interests</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {hobbies.map((hobby) => (
              <div key={hobby.label} className="hobby-item flex items-baseline gap-4 py-4 border-b border-white/10">
                <span className="text-white text-[8px]">●</span>
                <div>
                  <p className="text-hero-text/70 font-medium text-sm">{hobby.label}</p>
                  <p className="text-hero-text/25 text-xs mt-0.5">{hobby.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
