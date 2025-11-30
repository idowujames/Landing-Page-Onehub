import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, ShieldCheck, Wifi } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-foreground/80 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Limited Early Units Available
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
              Complete Visibility Over Your <span className="text-primary">Energy.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Stop wondering why your units finished so fast. Onehub tracks every appliance, monitors your generator, and helps you save money—in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
                <Link href="#cta">
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Easy Install</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Wifi className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">GSM + WiFi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-amber-600" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Real-time</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative">
            <div className="relative z-10">
              <Image
                src="/images/device-render.png"
                alt="Onehub Smart Energy Monitor"
                width={600}
                height={700}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
            {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-primary/10 to-blue-500/10 rounded-full blur-[60px] -z-10 opacity-60" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
