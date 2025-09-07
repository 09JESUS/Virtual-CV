"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if this is an anchor link
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      // Get the target element
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        // Scroll smoothly to the target
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Update URL without page jump
        window.history.pushState(null, "", href)
      }
    }

    // Add event listener to the document
    document.addEventListener("click", handleAnchorClick)

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
