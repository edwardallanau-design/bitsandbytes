'use client'

import { useEffect, useRef } from 'react'

export function useInView(className = 'in-view') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add(className)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-60px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [className])

  return ref
}
