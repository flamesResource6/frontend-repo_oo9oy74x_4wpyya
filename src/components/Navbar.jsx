import { Menu, Shield, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 backdrop-blur bg-black/40 border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-rose-600 to-rose-400 grid place-items-center text-white"><Shield size={18} /></div>
          <div className="font-semibold tracking-tight">Cyber Portfolio</div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#hall-of-fame" className="hover:text-white">Hall of Fame</a>
          <a href="#certificates" className="hover:text-white">Certificates</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#recommendations" className="hover:text-white">Recommendations</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors text-gray-200"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors text-gray-200"><Linkedin size={18} /></a>
          <a aria-label="Email" href="mailto:me@example.com" className="p-2 rounded-md hover:bg-white/10 transition-colors text-gray-200"><Mail size={18} /></a>
          <button className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
