"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    // Randomly trigger glitch effect
    const glitchInterval = setInterval(
      () => {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      },
      Math.random() * 5000 + 3000,
    )

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      <span className={`relative z-10 ${glitchActive ? "opacity-90" : "opacity-100"}`}>{text}</span>
      {glitchActive && (
        <>
          <span
            className="absolute top-0 left-0 z-0 text-red-500 animate-pulse"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, -2px)",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 z-0 text-blue-500 animate-pulse"
            style={{
              clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)",
              transform: "translate(2px, 2px)",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  )
}
