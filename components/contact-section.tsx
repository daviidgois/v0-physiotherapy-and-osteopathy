import { MapPin, Clock, Phone } from "lucide-react"
import { Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-brand-green mb-4">Fale Connosco!</h2>
          <p className="text-2xl text-muted-foreground">Faça-nos uma visita</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-3xl font-bold text-brand-green mb-2">Localização</h3>
                  <p className="text-muted-foreground text-xl">Avenida Luís Martins Nº 353</p>
                  <p className="text-muted-foreground text-xl">3500-733 Viseu</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-3xl font-bold text-brand-green mb-2">Horário</h3>
                  <p className="text-muted-foreground text-xl">08:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-3xl font-bold text-brand-green mb-2">Contactos</h3>
                  <p className="text-muted-foreground text-xl">+351 938 140 418</p>
                  <p className="text-muted-foreground text-xl">geral@rfisioviseu.pt</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-foreground rounded-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-foreground rounded-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-7.927083!3d40.646755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f8f5e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sAvenida%20Lu%C3%ADs%20Martins%20353%2C%203500-733%20Viseu!5e0!3m2!1sen!2spt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="R. Fisio Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
