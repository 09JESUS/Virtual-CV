"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CommandHelp() {
  const [isOpen, setIsOpen] = useState(false)

  const commands = [
    {
      command: "about",
      description: "Learn about Forget's background and education",
      action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      command: "skills",
      description: "View technical skills and expertise",
      action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      command: "projects",
      description: "Explore featured projects and GitHub repositories",
      action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      command: "contact",
      description: "Get in touch or send a message",
      action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      command: "resume",
      description: "Download CV/Resume",
      action: () => {
        const link = document.createElement("a")
        link.href = "/resume.pdf"
        link.download = "Forget_Cybersecurity_Resume.pdf"
        link.click()
      },
    },
    {
      command: "github",
      description: "Visit GitHub profile",
      action: () => window.open("https://github.com/09JESUS", "_blank"),
    },
  ]

  return (
    <>
      {/* Floating Help Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-black shadow-lg"
          size="icon"
        >
          <Terminal className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Help Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-6 z-50 w-80"
          >
            <Card className="bg-black border border-green-500 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-green-500 font-mono text-lg">Portfolio Commands</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-400 text-sm mb-4">Click any command to navigate:</p>
                {commands.map((cmd, index) => (
                  <motion.div
                    key={cmd.command}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer p-2 rounded hover:bg-gray-900 transition-colors"
                    onClick={() => {
                      cmd.action()
                      setIsOpen(false)
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-green-500 text-sm">$ {cmd.command}</div>
                        <div className="text-gray-400 text-xs">{cmd.description}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-green-500 transition-colors" />
                    </div>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-gray-800">
                  <p className="text-gray-500 text-xs font-mono">Type 'help' in terminal for more commands</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
