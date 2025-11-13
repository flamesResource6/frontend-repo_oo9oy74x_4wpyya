import { Award, ShieldCheck, GraduationCap, ThumbsUp, ExternalLink } from 'lucide-react'
import DotGrid from './DotGrid'

export function SectionWrapper({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-0 opacity-60">
        <DotGrid />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-rose-600 text-white grid place-items-center">
            <Icon size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export function HallOfFame({ items = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <a key={i} href={item.link} target="_blank" rel="noreferrer" className="group bg-white/[0.06] backdrop-blur rounded-xl border border-white/10 p-5 hover:border-rose-500/50 hover:bg-white/[0.09] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">{item.company}</h3>
              <p className="text-sm text-gray-300">{item.title}</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-rose-400" />
          </div>
          <p className="mt-3 text-sm text-gray-300">{item.description}</p>
          <div className="mt-3 text-xs text-gray-400">{item.date}</div>
        </a>
      ))}
    </div>
  )
}

export function Certificates({ items = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} className="bg-white/[0.06] backdrop-blur rounded-xl border border-white/10 p-5">
          <h3 className="text-base font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-gray-300">{item.issuer}</p>
          <p className="mt-2 text-sm text-gray-300">{item.summary}</p>
          <div className="mt-3 text-xs text-gray-400">{item.date}</div>
        </div>
      ))}
    </div>
  )
}

export function Education({ items = [] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="bg-white/[0.06] backdrop-blur rounded-xl border border-white/10 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">{item.school}</h3>
            <span className="text-xs text-gray-400">{item.years}</span>
          </div>
          <p className="text-sm text-gray-300">{item.degree}</p>
        </li>
      ))}
    </ul>
  )
}

export function Recommendations({ items = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <figure key={i} className="bg-white/[0.06] backdrop-blur rounded-xl border border-white/10 p-5">
          <blockquote className="text-gray-200">“{item.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-gray-400">— {item.name}, {item.role}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export const sectionMeta = {
  hallOfFame: { title: 'Hall of Fame', icon: Award },
  certificates: { title: 'Certificates', icon: ShieldCheck },
  education: { title: 'Education', icon: GraduationCap },
  recommendations: { title: 'Recommendations', icon: ThumbsUp },
}
