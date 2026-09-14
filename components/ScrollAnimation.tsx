'use client'

import { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  delay?: number
}

/**
 * Wraps children in a div that fades + slides up into view on scroll.
 * Respects prefers-reduced-motion via CSS (see globals.css).
 * Triggers once — no looping.
 */
export default function ScrollAnimation({
  children,
  className = '',
  stagger = false,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${stagger ? 'scroll-stagger' : 'scroll-animate'} ${className}`}
    >
      {children}
    </div>
  )
}
