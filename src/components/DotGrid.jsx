import { useEffect, useRef } from 'react'

export default function DotGrid() {
  const ref = useRef(null)
  const rafRef = useRef(0)
  const tRef = useRef(0)

  useEffect(() => {
    const node = ref.current
    let t = 0

    function animate() {
      t += 0.008
      tRef.current = t
      if (node) {
        const strength = 0.2 + Math.sin(t * 2) * 0.2
        node.style.opacity = String(0.15 + strength)
        node.style.filter = `blur(${0.2 + Math.sin(t) * 0.6}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-rose-400/60" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot)" />
      </svg>
    </div>
  )
}
