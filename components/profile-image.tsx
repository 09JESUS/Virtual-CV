"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Lock } from "lucide-react"

interface ProfileImageProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ProfileImage({
  src = "/placeholder.svg?height=400&width=400",
  alt = "Profile Image",
  size = "md",
  className = "",
}: ProfileImageProps) {
  // Determine size dimensions
  const dimensions = {
    sm: { width: 150, height: 150 },
    md: { width: 250, height: 250 },
    lg: { width: 350, height: 350 },
  }

  const { width, height } = dimensions[size]

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated border effect */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-75 blur-sm animate-pulse"></div>

      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 rounded-full overflow-hidden z-10 mix-blend-overlay">
        <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=400')] bg-cover opacity-30"></div>
      </div>

      {/* Binary code overlay */}
      <div className="absolute inset-0 rounded-full overflow-hidden z-20 mix-blend-overlay">
        <div className="w-full h-full bg-black opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-green-500 font-mono text-xs opacity-30 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 10 }).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main image */}
      <div
        className={`relative rounded-full overflow-hidden border-4 border-black z-30 w-[${width}px] h-[${height}px]`}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          priority
        />
      </div>

      {/* Scanning effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden z-40 pointer-events-none">
        <motion.div
          className="w-full h-8 bg-gradient-to-b from-green-500/30 to-transparent"
          animate={{
            y: ["-100%", "100%", "-100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "linear",
          }}
        />
      </div>

      {/* Corner security badge */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full z-50 flex items-center justify-center">
        <Lock className="h-4 w-4 text-black" />
      </div>
    </motion.div>
  )
}
