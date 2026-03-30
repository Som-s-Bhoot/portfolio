export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8ED] max-w-[1280px] mx-auto">
      <div className="px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[13px] font-normal text-[#5A5A5A]">
          © {new Date().getFullYear()} Som Chakravarty
        </p>
        <p className="text-[12px] font-normal text-[#5A5A5A]">
          Built with React, Tailwind, GSAP & Lenis. Typeset in Inter.
        </p>
      </div>
    </footer>
  )
}
