"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function HackerTerminal() {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  const commands = [
    "$ initializing security scan...",
    "$ scanning network perimeter...",
    "$ identifying vulnerabilities...",
    "$ analyzing attack vectors...",
    "$ detecting potential threats...",
    "$ applying security patches...",
    "$ hardening system defenses...",
    "$ scan complete. system secured.",
  ]

  useEffect(() => {
    let currentCommand = 0
    let currentChar = 0
    let isDeleting = false
    let typingSpeed = 100

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    // Type text
    const typeText = () => {
      const command = commands[currentCommand]

      if (isDeleting) {
        setText(command.substring(0, currentChar - 1))
        currentChar--
        typingSpeed = 30
      } else {
        setText(command.substring(0, currentChar + 1))
        currentChar++
        typingSpeed = 100
      }

      if (!isDeleting && currentChar === command.length) {
        // Pause at the end of typing
        typingSpeed = 1500
        isDeleting = true
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false
        currentCommand = (currentCommand + 1) % commands.length
        typingSpeed = 500
      }

      setTimeout(typeText, typingSpeed)
    }

    setTimeout(typeText, 1000)

    return () => {
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <Card className="bg-black border border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-green-500 font-mono text-sm">
          <code>
            {text}
            <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </code>
        </pre>
      </CardContent>
    </Card>
  )
}
