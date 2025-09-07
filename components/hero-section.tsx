"use client"

import { useEffect, useState } from "react"
import { Shield, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { GlitchText } from "@/components/glitch-text"
import Image from "next/image"

export function HeroSection() {
  const [text, setText] = useState("")
  const [binaryGrid, setBinaryGrid] = useState<string[]>([])
  const [binaryOverlay, setBinaryOverlay] = useState<string[][]>([])
  const [isClient, setIsClient] = useState(false)

  const fullText = "Get to know who I am, what I do, and what drives my passion for software."

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Typing animation
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.substring(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Generate random binary grid
    const grid = Array.from({ length: 100 }, () => (Math.random() > 0.5 ? "1" : "0"))
    setBinaryGrid(grid)

    const overlay = Array.from({ length: 100 }, () =>
      Array.from({ length: 20 }, () => (Math.random() > 0.5 ? "1" : "0"))
    )
    setBinaryOverlay(overlay)
  }, [])



  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)]" />

        {isClient && (
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {binaryGrid.map((bit, i) => (
              <div
                key={i}
                className="border border-green-900/20 flex items-center justify-center text-green-500/10 font-mono text-xs"
              >
                {bit}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:w-1/2">
            <motion.div
              className="inline-block p-2 bg-green-500 rounded-full mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Shield className="h-10 w-10 text-black" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Hi, I'm <GlitchText text="Forget Nukeri" className="text-green-500" />
              </motion.div>
            </h1>
            <div className="h-16 md:h-12">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 relative">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-75 blur-sm animate-pulse" />

              <div className="absolute inset-0 rounded-full overflow-hidden z-10 mix-blend-overlay">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=400')] bg-cover opacity-30" />
              </div>

              {/* Binary overlay */}
              {isClient && (
                <div className="absolute inset-0 rounded-full overflow-hidden z-20 mix-blend-overlay">
                  <div className="w-full h-full bg-black opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-green-500 font-mono text-xs opacity-30 overflow-hidden">
                      {binaryOverlay.map((row, i) => (
                        <div key={i} className="whitespace-nowrap">
                          {row.map((bit, j) => (
                            <span key={j}>{bit}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Profile image */}
              <div className="relative rounded-full overflow-hidden border-4 border-black z-30 w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/forget-profile.jpeg"
                  alt="Forget Nukeri - Cybersecurity Specialist"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Scan animation */}
              <div className="absolute inset-0 rounded-full overflow-hidden z-40 pointer-events-none">
                <motion.div
                  className="w-full h-8 bg-gradient-to-b from-green-500/30 to-transparent"
                  animate={{ y: ["-100%", "100%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </div>

              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full z-50 flex items-center justify-center">
                <Lock className="h-4 w-4 text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
