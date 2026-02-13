"use client"

import { useEffect, useRef, useState } from "react"

export function KineticHeading({ title }: { title: string }) {
  const [visible, setVisible] = useState(false)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const words = title.split(" ")

  useEffect(() => {
    if (!headingRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(headingRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white leading-tight">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block mr-3 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px) scale(1)" : "translateY(12px) scale(0.98)",
            transitionDelay: `${index * 70}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
}
