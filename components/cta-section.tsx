import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Control Your Power. Reduce Your Costs.
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Join the waitlist and be the first to experience Onehub.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-white rounded-xl">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-sm"
                  />
                </div>
                <Button size="lg" variant="secondary" className="gap-2 shrink-0">
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Priority access when we launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Discounted early pricing</span>
                </div>
              </div>

              <p className="text-xs text-white/60 mt-6">
                No spam. You'll only receive essential updates.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
