import { useEffect, useRef } from 'react'

// Full-site interactive background: particles + subtle ripples
export default function InteractiveBackground() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, down: false })
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = 0, height = 0

    function resize() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.scale(dpr, dpr)
      initParticles()
    }

    function initParticles() {
      const spacing = 40
      const cols = Math.ceil(width / spacing)
      const rows = Math.ceil(height / spacing)
      const particles = []
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          particles.push({
            x: x * spacing + ((y % 2) * spacing) / 2,
            y: y * spacing,
            baseX: x * spacing + ((y % 2) * spacing) / 2,
            baseY: y * spacing,
            size: 1.2 + Math.random() * 0.8,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
      particlesRef.current = particles
    }

    let lastX = 0, lastY = 0
    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseRef.current.vx = x - lastX
      mouseRef.current.vy = y - lastY
      lastX = mouseRef.current.x = x
      lastY = mouseRef.current.y = y
    }
    function onPointerDown() { mouseRef.current.down = true }
    function onPointerUp() { mouseRef.current.down = false }

    function step(t) {
      ctx.clearRect(0, 0, width, height)

      // Background gradient
      const grd = ctx.createLinearGradient(0, 0, width, height)
      grd.addColorStop(0, '#08080b')
      grd.addColorStop(1, '#0b0f17')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      // Particles
      const particles = particlesRef.current
      const { x: mx, y: my, vx, vy, down } = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.hypot(dx, dy) + 0.0001
        const influence = Math.max(0, 160 - dist)

        // spring back to base
        const springX = (p.baseX - p.x) * 0.02
        const springY = (p.baseY - p.y) * 0.02

        // ripple push
        const push = influence > 0 ? (down ? 2.2 : 1.2) : 0
        p.x += springX + (dx / dist) * push
        p.y += springY + (dy / dist) * push

        // subtle flow
        p.phase += 0.02
        const flow = Math.sin(p.phase) * 0.3
        p.x += flow * 0.3
        p.y += flow * 0.1

        // draw
        const baseAlpha = 0.25
        const extra = Math.max(0, 1 - dist / 180) * 0.6 + (down ? 0.15 : 0)
        ctx.beginPath()
        ctx.fillStyle = `rgba(244, 63, 94, ${baseAlpha + extra})` // rose-500 glow
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // connecting lines near mouse for interactivity
        if (dist < 90) {
          ctx.strokeStyle = `rgba(244, 63, 94, ${0.08 + (90 - dist) / 900})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.baseX, p.baseY)
          ctx.stroke()
        }
      }

      // velocity trail pulse
      const speed = Math.hypot(vx, vy)
      if (speed > 1) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(244, 63, 94, ${Math.min(0.3, speed / 30)})`
        ctx.lineWidth = 2
        ctx.arc(mx, my, 22 + Math.min(60, speed * 0.8), 0, Math.PI * 2)
        ctx.stroke()
      }

      rafRef.current = requestAnimationFrame(step)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointerup', onPointerUp)

    resize()
    rafRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dpr])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#05060a_100%)]" />
    </div>
  )
}
