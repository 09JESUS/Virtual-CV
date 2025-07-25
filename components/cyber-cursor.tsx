"use client"

import { useEffect, useState } from "react"

export function CyberCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-5 h-5 rounded-full bg-green-500 flex items-center justify-center transition-all duration-150 ${
            isClicking ? "scale-50" : "scale-100"
          }`}
        >
          {isClicking && <div className="absolute w-10 h-10 rounded-full border border-green-500 animate-ping" />}
        </div>
      </div>

      {/* Trailing effect */}
      <div
        className="fixed w-12 h-12 rounded-full border border-green-500 pointer-events-none z-40 opacity-30 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease-out, left 0.3s ease-out, top 0.3s ease-out",
        }}
      />
    </>
  )
}
