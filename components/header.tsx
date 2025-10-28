"use client"

import type React from "react"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Header() {
  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1200
    let start: number | null = null

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
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
    <header className="border-b-2 border-brand-purple bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-56">
            <Image src="/images/design-mode/rfisio.jpg" alt="R.FISIO Logo" fill className="object-contain" />
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="#sobre"
            onClick={(e) => smoothScrollTo(e, "#sobre")}
            className="text-muted-foreground hover:text-brand-purple transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#servicos"
            onClick={(e) => smoothScrollTo(e, "#servicos")}
            className="text-muted-foreground hover:text-brand-purple transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#contacto"
            onClick={(e) => smoothScrollTo(e, "#contacto")}
            className="text-muted-foreground hover:text-brand-purple transition-colors"
          >
            Contacto
          </Link>
          <div className="flex items-center gap-3 ml-4">
            <Link href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
