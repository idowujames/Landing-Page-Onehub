import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Wifi, Users } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>Limited Early Units Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Light. Your Money. <span className="text-primary">Your Control.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Stop guessing where your prepaid units go. See exactly what each appliance costs you, track your power sources, and reduce your energy bill—all from one simple app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Easy Install</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Wifi className="h-4 w-4 text-primary" />
                <span>GSM + WiFi</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-primary" />
                <span>Real-time Data</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-secondary to-muted rounded-3xl p-8 md:p-12">
              <Image
                src="/images/device-render.png"
                alt="Onehub Smart Energy Monitor"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
