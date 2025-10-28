"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // Smooth scroll to top with easing
  const scrollToTop = () => {
    const duration = 1200
    const start = window.scrollY
    const startTime = performance.now()

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, start * (1 - easeProgress))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand-green text-white shadow-lg hover:bg-brand-green/90 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}
