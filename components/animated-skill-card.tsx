"use client"

import { type ReactNode, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface AnimatedSkillCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function AnimatedSkillCard({ icon, title, description }: AnimatedSkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [binaryText, setBinaryText] = useState("")

  useEffect(() => {
    setIsClient(true)
    setBinaryText(Math.random() > 0.5 ? "01" : "10")
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className="bg-black border border-gray-800 overflow-hidden relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <CardContent className="p-6 relative z-10">
          <motion.div
            className="mb-4"
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-bold mb-2 text-green-500">{title}</h3>

          <p className="text-gray-400">{description}</p>

          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-green-500 text-xs font-mono">{isClient ? binaryText : null}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
