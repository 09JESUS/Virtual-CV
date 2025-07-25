"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/api/resume"
    link.download = "Forget_Nukeri_Resume.pdf"
    link.click()
    closeMenu()
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:text-green-500">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-black border-t border-b border-gray-800 z-50"
          >
            <nav className="flex flex-col p-4">
              <Link
                href="#about"
                className="py-3 px-4 hover:bg-gray-900 hover:text-green-500 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="py-3 px-4 hover:bg-gray-900 hover:text-green-500 transition-colors"
                onClick={closeMenu}
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="py-3 px-4 hover:bg-gray-900 hover:text-green-500 transition-colors"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="py-3 px-4 hover:bg-gray-900 hover:text-green-500 transition-colors"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="py-3 px-4 hover:bg-gray-900 hover:text-green-500 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Button
                className="mt-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                onClick={handleResumeDownload}
              >
                Download Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
