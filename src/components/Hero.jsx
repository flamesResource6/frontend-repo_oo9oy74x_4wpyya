import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 py-24 flex items-end sm:items-center">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-rose-400 font-semibold">Cyber Security Portfolio</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Offensive Security Research and Recognitions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Responsible disclosures, bug bounty highlights, certifications, academic background, and testimonials.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#hall-of-fame" className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors">View Highlights</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
