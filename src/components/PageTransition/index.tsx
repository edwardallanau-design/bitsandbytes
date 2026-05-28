'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPath = useRef(pathname)
  const isInitial = useRef(true)

  const shouldAnimate = pathname !== prevPath.current || !isInitial.current
  if (pathname !== prevPath.current) {
    prevPath.current = pathname
    isInitial.current = false
  }

  return (
    <main
      key={pathname}
      style={{ animation: shouldAnimate ? 'slideInContent 0.5s ease-out' : 'none' }}
    >
      {children}
    </main>
  )
}
