"use client"

import type React from "react"
import type { FetchedProject } from "@/types/github-projects" // Declare FetchedProject type here

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface TerminalLine {
  id: string
  type: "input" | "output" | "error"
  content: string
  timestamp: Date
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "1",
      type: "output",
      content: "Welcome to Forget's Portfolio Terminal v1.0",
      timestamp: new Date(),
    },
    {
      id: "2",
      type: "output",
      content: "Type 'help' to see available commands.",
      timestamp: new Date(),
    },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [lines])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()

    // Add command to history
    setCommandHistory((prev) => [...prev, command])
    setHistoryIndex(-1)

    // Add input line
    const inputLine: TerminalLine = {
      id: Date.now().toString(),
      type: "input",
      content: `$ ${command}`,
      timestamp: new Date(),
    }

    let outputLines: TerminalLine[] = []

    switch (cmd) {
      case "help":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "Available commands:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "  about       - Learn about Forget's background",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "  experience  - View professional experience",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "  skills      - View technical skills & competencies",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "  projects    - List all projects",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "  contact     - Get contact information",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "  education   - View education & certifications",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "  certifications - View professional certifications",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "  languages   - View language proficiencies",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 10).toString(),
            type: "output",
            content: "  github      - Open GitHub profile",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 11).toString(),
            type: "output",
            content: "  resume      - Download resume",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 12).toString(),
            type: "output",
            content: "  clear       - Clear terminal",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 13).toString(),
            type: "output",
            content: "  whoami      - Display user info",
            timestamp: new Date(),
          },
        ]
        break

      case "about":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== ABOUT FORGET NUKERI ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "Final year Information Technology student at NWU",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "Specializing in cybersecurity and software development",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "Passionate about creating secure, efficient solutions",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "Goal: Career at intersection of cybersecurity & software engineering",
            timestamp: new Date(),
          },
        ]
        setTimeout(() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "experience":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== PROFESSIONAL EXPERIENCE ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "STUDENT ASSISTANT - IT SUPPORT",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "North-West University | Vanderbijlpark, Gauteng",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "• Supported 150+ students with IT issues & troubleshooting",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "• Software updates, hardware upgrades, system setups",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "• Configured workstations & ensured network connectivity",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "• Technical support for non-technical users",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 10).toString(),
            type: "output",
            content: "RESIDENTIAL COORDINATOR",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 11).toString(),
            type: "output",
            content: "Vaal Student Housing (VSH) | Vanderbijlpark, Gauteng",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 12).toString(),
            type: "output",
            content: "• Resolved technical issues reported by students",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 13).toString(),
            type: "output",
            content: "• Primary contact for 160 students in residence",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 14).toString(),
            type: "output",
            content: "• Managed daily residence operations (assignments, check-ins)",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 15).toString(),
            type: "output",
            content: "• Enforced residence policies and procedures",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 16).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 17).toString(),
            type: "output",
            content: "LEADERSHIP: RCL Public Relations Officer",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 18).toString(),
            type: "output",
            content: "ACHIEVEMENT: Golden Key International Honour Society (Top 15%)",
            timestamp: new Date(),
          },
        ]
        setTimeout(() => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "skills":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== TECHNICAL SKILLS ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "IT SUPPORT & TROUBLESHOOTING:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "• Installation, configuration, troubleshooting",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "• Operating systems & applications updating",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "CYBERSECURITY FUNDAMENTALS:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "• Network vulnerabilities & threat detection",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "• Privacy, data confidentiality & cyber best practices",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 10).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 11).toString(),
            type: "output",
            content: "PROGRAMMING LANGUAGES:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 12).toString(),
            type: "output",
            content: "• SQL, Python, HTML, React, C++, Java, C#",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 13).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 14).toString(),
            type: "output",
            content: "CORE COMPETENCIES:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 15).toString(),
            type: "output",
            content: "• Communication & interpersonal skills",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 16).toString(),
            type: "output",
            content: "• Problem-solving & analytical thinking",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 17).toString(),
            type: "output",
            content: "• Time management & task prioritization",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 18).toString(),
            type: "output",
            content: "• Attention to detail & organizational skills",
            timestamp: new Date(),
          },
        ]
        setTimeout(() => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "projects":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== FEATURED PROJECTS ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "Fetching latest projects from GitHub...",
            timestamp: new Date(),
          },
        ]
        // Simulate fetching projects and then displaying them
        fetch("/api/github-projects")
          .then((res) => res.json())
          .then((data: FetchedProject[]) => {
            if (data.length > 0) {
              const projectList = data.map((p) => `• ${p.title} (${p.tags.join(", ")}) - ${p.link}`).join("\n")
              setLines((prev) => [
                ...prev,
                {
                  id: (Date.now() + 4).toString(),
                  type: "output",
                  content: projectList,
                  timestamp: new Date(),
                },
                {
                  id: (Date.now() + 5).toString(),
                  type: "output",
                  content: "\nAll projects available at: github.com/09JESUS",
                  timestamp: new Date(),
                },
              ])
            } else {
              setLines((prev) => [
                ...prev,
                {
                  id: (Date.now() + 4).toString(),
                  type: "output",
                  content: "No projects found or failed to fetch.",
                  timestamp: new Date(),
                },
              ])
            }
          })
          .catch((err) => {
            console.error("Terminal project fetch error:", err)
            setLines((prev) => [
              ...prev,
              {
                id: (Date.now() + 4).toString(),
                type: "error",
                content: "Error fetching projects. Please try again later.",
                timestamp: new Date(),
              },
            ])
          })
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "contact":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== CONTACT INFORMATION ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "Email: forgetnukeri585@gmail.com",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "Phone: 076 285 2630",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "Brand: FSolution.-Dev",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "GitHub: github.com/09JESUS",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "Location: Gauteng, South Africa",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "Open to: New projects, job opportunities, collaborations",
            timestamp: new Date(),
          },
        ]
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }, 500)
        break

      case "education":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== EDUCATION & CERTIFICATIONS ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "FORMAL EDUCATION:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "North-West University (NWU) | Vanderbijlpark, Gauteng",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "• BSc in Information Technology (Final Year) - Expected Dec 2025",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "• Modules: IT Development, AI, Data Structures, Systems Design and Analysis,",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "  Web & Mobile Dev, Statistics, Discrete Mathematics, Information Security",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "• Final Year Project: Integrated Cyber-Software Solutions Initiative",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 10).toString(),
            type: "output",
            content: "PROFESSIONAL CERTIFICATIONS:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 11).toString(),
            type: "output",
            content: "• Google Cybersecurity Professional Certificate",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 12).toString(),
            type: "output",
            content: "  (Administered by Coursera)",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 13).toString(),
            type: "output",
            content: "• Google Technical Support Fundamentals",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 14).toString(),
            type: "output",
            content: "  Professional Certificate",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 15).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 16).toString(),
            type: "output",
            content: "ACHIEVEMENTS:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 17).toString(),
            type: "output",
            content: "• RCL (Representative Council of Learners)",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 18).toString(),
            type: "output",
            content: "  Public Relations Officer",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 19).toString(),
            type: "output",
            content: "• Golden Key International Honour Society (Top 15%)",
            timestamp: new Date(),
          },
        ]
        break

      case "languages":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== LANGUAGE PROFICIENCIES ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "• English - Fluent (Professional Working Proficiency)",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "• isiZulu - Native Speaker (Full Professional Proficiency)",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "• Xitsonga - Native Speaker (Full Professional Proficiency)",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "COMMUNICATION STRENGTHS:",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "• Multilingual technical support capabilities",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "• Cross-cultural communication skills",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 10).toString(),
            type: "output",
            content: "• Effective with diverse user groups",
            timestamp: new Date(),
          },
        ]
        break

      case "github":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "Opening GitHub profile...",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "URL: https://github.com/09JESUS",
            timestamp: new Date(),
          },
        ]
        setTimeout(() => {
          window.open("https://github.com/09JESUS", "_blank")
        }, 1000)
        break

      case "resume":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "Downloading resume...",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "File: Forget_Nukeri_Resume.pdf",
            timestamp: new Date(),
          },
        ]
        setTimeout(() => {
          const link = document.createElement("a")
          link.href = "/api/resume"
          link.download = "Forget_Nukeri_Resume.pdf"
          link.click()
        }, 1000)
        break

      case "clear":
        setLines([
          {
            id: Date.now().toString(),
            type: "output",
            content: "Terminal cleared. Type 'help' for commands.",
            timestamp: new Date(),
          },
        ])
        setCurrentInput("")
        return

      case "whoami":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== USER PROFILE ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "Name: Forget Nukeri",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "Role: Aspiring Cybersecurity Specialist & Software Developer",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "Status: Final Year IT Student at NWU",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "Location: Gauteng, South Africa",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "Brand: FSolution.-Dev",
            timestamp: new Date(),
          },
        ]
        break

      case "":
        // Empty command, just add a new prompt
        break

      case "certifications":
      case "certs":
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "output",
            content: "=== PROFESSIONAL CERTIFICATIONS ===",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 3).toString(),
            type: "output",
            content: "GOOGLE CYBERSECURITY PROFESSIONAL CERTIFICATE",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 4).toString(),
            type: "output",
            content: "• Administered by Coursera",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 5).toString(),
            type: "output",
            content: "• Comprehensive cybersecurity fundamentals",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 6).toString(),
            type: "output",
            content: "• Network security & threat detection",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 7).toString(),
            type: "output",
            content: "",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 8).toString(),
            type: "output",
            content: "GOOGLE TECHNICAL SUPPORT FUNDAMENTALS",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 9).toString(),
            type: "output",
            content: "• Professional Certificate",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 10).toString(),
            type: "output",
            content: "• IT troubleshooting & customer service",
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 11).toString(),
            type: "output",
            content: "• Hardware & software support",
            timestamp: new Date(),
          },
        ]
        break

      default:
        outputLines = [
          {
            id: (Date.now() + 1).toString(),
            type: "error",
            content: `Command not found: ${command}`,
            timestamp: new Date(),
          },
          {
            id: (Date.now() + 2).toString(),
            type: "output",
            content: "Type 'help' to see available commands.",
            timestamp: new Date(),
          },
        ]
        break
    }

    setLines((prev) => [...prev, inputLine, ...outputLines])
    setCurrentInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <>
      {/* Terminal Button */}
      <motion.div
        className="fixed bottom-20 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-green-500 shadow-lg"
          size="icon"
        >
          <Terminal className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-36 left-6 z-50 w-96 ${isMinimized ? "h-12" : "h-80"} transition-all duration-300`}
          >
            <Card className="bg-black border border-green-500 shadow-2xl h-full flex flex-col font-mono">
              <CardHeader className="flex flex-row items-center justify-between py-2 px-3 bg-gray-900 border-b border-green-500">
                <CardTitle className="text-green-500 text-sm flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  Terminal
                </CardTitle>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="h-6 w-6 text-yellow-500 hover:text-yellow-400"
                  >
                    {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 text-red-500 hover:text-red-400"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>

              {!isMinimized && (
                <CardContent className="flex-1 flex flex-col p-3 overflow-hidden">
                  {/* Terminal Output */}
                  <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-1 mb-2 text-sm">
                    {lines.map((line) => (
                      <div
                        key={line.id}
                        className={`${
                          line.type === "input"
                            ? "text-white"
                            : line.type === "error"
                              ? "text-red-400"
                              : "text-green-400"
                        }`}
                      >
                        {line.content}
                      </div>
                    ))}
                  </div>

                  {/* Input Line */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-white outline-none border-none"
                      placeholder="Type 'help' for commands..."
                      autoComplete="off"
                    />
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
