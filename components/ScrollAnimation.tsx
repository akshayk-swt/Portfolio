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
  * Triggers smoothly as soon as the element approaches the viewport.
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

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 50px 0px' }
    )

    observer.observe(el)

    // Safety fallback: ensure content is visible after 500ms even if observer didn't fire
    const fallbackTimer = setTimeout(() => {
      if (el && !el.classList.contains('visible')) {
        el.classList.add('visible')
      }
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
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
