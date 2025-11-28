import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Take Control of Your Energy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of Nigerians who are saving money and gaining visibility into their energy consumption.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-card rounded-xl border border-border">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
              />
            </div>
            <Button size="lg" className="gap-2 shrink-0">
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Be the first to know when Onehub launches. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  )
}
