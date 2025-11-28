import { Eye, Zap, Clock, TrendingDown } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const benefits = [
  {
    icon: Eye,
    title: "See Exactly What's Draining Your Units",
    description:
      "Track every appliance in real-time. Know what your AC, freezer, and water pump cost you daily. No more guessing.",
  },
  {
    icon: Zap,
    title: "Never Be Caught Off Guard",
    description: "Check if grid was available while you were away. Know when your inverter charged and how long the generator ran.",
  },
  {
    icon: Clock,
    title: "Set Up in Minutes, Not Hours",
    description:
      "Install at your main breaker with no invasive wiring. Perfect for renters and homeowners alike. Start tracking immediately.",
  },
  {
    icon: TrendingDown,
    title: "One App for Everything",
    description:
      "Grid, generator, inverter, solar—all in one place. No more juggling multiple apps. Complete visibility, simplified.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            See Everything That Matters in One View
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track costs, plan your day, and reduce your energy bill—all without changing your lifestyle.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
