import { useEffect, useMemo, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export default function ParticleBackground({ className = '' }) {
  const canvasRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const baseColor = useMemo(() => ({ r: 65, g: 135, b: 210 }), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrame = 0
    let particles = []

    const resize = () => {
      const rect = { width: window.innerWidth, height: window.innerHeight }
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const area = rect.width * rect.height
      const target = clamp(Math.floor(area / 12000), 70, 220)
      particles = Array.from({ length: target }).map(() => {
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        const radius = 1.1 + Math.random() * 2.4
        const speed = 0.07 + Math.random() * 0.16
        const angle = Math.random() * Math.PI * 2
        const vx = Math.cos(angle) * speed
        const vy = Math.sin(angle) * speed
        const alpha = 0.16 + Math.random() * 0.26
        return { x, y, radius, vx, vy, alpha }
      })
    }

    const tick = () => {
      if (!canvas) return
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        const a = clamp(p.alpha, 0.12, 0.38)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${a})`
        ctx.shadowColor = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${a})`
        ctx.shadowBlur = 18
        ctx.fill()
      }

      ctx.shadowBlur = 0
      animationFrame = window.requestAnimationFrame(tick)
    }

    resize()
    const onResize = () => resize()
    window.addEventListener('resize', onResize, { passive: true })

    if (!prefersReducedMotion) {
      animationFrame = window.requestAnimationFrame(tick)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [baseColor, prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={[
        'pointer-events-none fixed inset-0 z-0 h-full w-full select-none',
        className,
      ].join(' ')}
    />
  )
}
