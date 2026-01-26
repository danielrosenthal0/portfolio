'use client'
import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  rootMargin?: string
  threshold?: number
  once?: boolean
}

const FadeInOnScroll = ({
  children,
  className = '',
  rootMargin = '-50px 0px',
  threshold = 0.1,
  once = true,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once && el) obs.unobserve(el)
        }
      },
      { root: null, rootMargin, threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold, once])

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity transition-transform duration-2000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}

export default FadeInOnScroll