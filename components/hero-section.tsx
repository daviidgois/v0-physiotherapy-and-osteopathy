"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const targetPosition = element.offsetTop - 80
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1200
    let start: number | null = null

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <section id="home" className="bg-gradient-to-b from-muted to-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/design-mode/7NLc8H4QXZhmPY9c5egazRJuM.jpg"
              alt="Sala de espera moderna"
              className="rounded-2xl shadow-lg w-[100] h-auto"
            />
            <div className="absolute -top-6 -right-6"></div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-brand-green leading-tight">
              Fisioterapia
              <br />e Osteopatia
            </h1>
            <Button
              onClick={() => scrollToSection("sobre")}
              className="bg-brand-green hover:bg-brand-green-hover text-white px-8 py-6 text-xl rounded-lg"
            >
              Sobre a R. Fisio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
