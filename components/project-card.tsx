"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpRight,
  CreditCard,
  Lock,
  FileText,
  CreditCardIcon,
  HeadphonesIcon,
  MessageSquare
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface ProjectCardProps {
  title?: string
  name?: string
  description: string
  tags: string[]
  image?: string
  link?: string
  icon?: ReactNode
}

export function ProjectCard({
  title,
  name,
  description,
  tags,
  image,
  link = "#",
  icon
}: ProjectCardProps) {
  const fallbackTitle = title || name || "Untitled Project"
  let projectIcon = icon
  let bgClass = "bg-gradient-to-br from-gray-900/20 to-gray-800/20"

  if (!projectIcon && typeof fallbackTitle === "string") {
    const lowerTitle = fallbackTitle.toLowerCase()

    if (lowerTitle.includes("credit card") || lowerTitle.includes("fraud")) {
      projectIcon = <CreditCard className="h-20 w-20 text-green-500" />
      bgClass = "bg-gradient-to-br from-red-900/20 to-orange-900/20"
    } else if (lowerTitle.includes("password")) {
      projectIcon = <Lock className="h-20 w-20 text-green-500" />
      bgClass = "bg-gradient-to-br from-blue-900/20 to-purple-900/20"
    } else if (lowerTitle.includes("fake news")) {
      projectIcon = <FileText className="h-20 w-20 text-green-500" />
      bgClass = "bg-gradient-to-br from-yellow-900/20 to-amber-900/20"
    } else if (lowerTitle.includes("ai-pay")) {
      projectIcon = <CreditCardIcon className="h-20 w-20 text-green-500" />
      bgClass = "bg-gradient-to-br from-green-900/20 to-emerald-900/20"
    } else if (lowerTitle.includes("techcare")) {
      projectIcon = <HeadphonesIcon className="h-20 w-20 text-green-500" />
      bgClass = "bg-gradient-to-br from-cyan-900/20 to-sky-900/20"
    } else if (lowerTitle.includes("chatbot")) {
      projectIcon = <MessageSquare className="h-20 w-20 text-green-500" />
      bgClass = "bg-gradient-to-br from-indigo-900/20 to-violet-900/20"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Card className="bg-black border border-gray-800 overflow-hidden group hover:border-green-500 transition-all duration-300 cursor-pointer h-full">
          <div className={`relative h-48 w-full overflow-hidden flex items-center justify-center ${bgClass}`}>
            {image ? (
              <>
                <Image
                  src={image}
                  alt={fallbackTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </>
            ) : (
              <div className="relative z-10">{projectIcon}</div>
            )}
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </div>
          </div>
          <CardContent className="p-6 relative">
            <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors flex items-center justify-between">
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                {fallbackTitle}
              </motion.span>
            </h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(tags) && tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-green-500 text-green-500">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
