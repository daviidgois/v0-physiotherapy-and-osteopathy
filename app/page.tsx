import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { BottomImage } from "@/components/bottom-image"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <BottomImage />
      <ScrollToTopButton />
    </main>
  )
}
