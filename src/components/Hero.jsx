import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0"><Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50">
          <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">Cyber Security Portfolio</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Showcasing Vulnerability Research, Responsible Disclosure, and Recognitions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 max-w-2xl">
            A curated collection of Hall of Fames, certifications, academic background, and peer recommendations. Built with a modern, interactive aesthetic.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#hall-of-fame" className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors">Explore Highlights</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-white/70 border border-gray-200 hover:bg-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
