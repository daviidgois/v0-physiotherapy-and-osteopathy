"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const facilityImages = [
    {
      src: "/rfisio-clinic-entrance-exterior.webp",
      alt: "Entrada da Clínica R. Fisio",
    },
    {
      src: "/consultation-room-with-desk-and-chairs.webp",
      alt: "Sala de Consulta R. Fisio",
    },
    {
      src: "/gym-exercise-area-with-equipment.webp",
      alt: "Ginásio de Reabilitação R. Fisio",
    },
    {
      src: "/treatment-room-with-physiotherapy-table.webp",
      alt: "Sala de Tratamento R. Fisio",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilityImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [currentSlide, facilityImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilityImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
  }

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6 space-y-32">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="relative order-2 md:order-1 md:col-span-2">
            <img
              src="/images/design-mode/S9f9Yp1dseWW7LLizZ4L7bQJrfc.png(1).avif"
              alt="Rui Pedro Carvalho"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>

          <div className="space-y-4 order-1 md:order-2 md:col-span-3">
            <h2 className="text-5xl font-bold text-brand-green mb-6">Rui Pedro Carvalho</h2>
            <ul className="space-y-3 text-muted-foreground text-lg">
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>Licenciado em Fisioterapia</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>Master em Terapia Manual</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>CO em Osteopatia</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>Formação em Lesões Desportivas</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>Formação em Reabilitação de Lesões Musculares</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>Formação em Prevenção de Lesões e Performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">•</span>
                <span>3 anos no futebol profissional (CDTondela e Académico de Viseu)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="space-y-4 md:col-span-3">
            <h2 className="text-5xl font-bold text-brand-green mb-6">R. Fisio</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Localizada em Viseu, a clínica é reconhecida pela excelência em cuidados de fisioterapia. Temos como
              missão proporcionar tratamentos personalizados e eficazes para a recuperação e manutenção da saúde física
              dos nossos pacientes.
            </p>
          </div>

          <div className="relative md:col-span-2">
            <img
              src="/physiotherapist-working-with-patient-on-floor-exer.jpg"
              alt="R. Fisio Treatment"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="relative order-2 md:order-1 md:col-span-2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              {facilityImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-green rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-green rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {facilityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-brand-green w-8" : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 order-1 md:order-2 md:col-span-3">
            <h2 className="text-5xl font-bold text-brand-green mb-6">As nossas instalações</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              A R. Fisio oferece um ambiente acolhedor e funcional, projetado para a recuperação e reabilitação eficaz. O nosso ginásio é totalmente equipado para garantir tratamentos seguros e de alta qualidade, focados no bem-estar dos pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
