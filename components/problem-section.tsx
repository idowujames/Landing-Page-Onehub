import { Zap, Activity, Clock, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const benefits = [
  {
    icon: Activity,
    title: "Real-Time Clarity",
    description:
      "Stop guessing. See what appliances are currently running, and keep tabs of your daily activity with a timeline view ",
  },
  {
    icon: Zap,
    title: "Stay Connected at All Times",
    description: "Automatically know when the grid is down, get instant alerts and track unusual spikes from anywhere in the world.",
  },
  {
    icon: Clock,
    title: "Predictable Energy",
    description:
      "Know how long your units will last based on current usage. Plan your recharges with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Hassle Setup",
    description:
      "Clamps onto your main cable in seconds. No invasive wiring. Whether you rent or own, you’ll start tracking in minutes.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Total Visibility. <span className="text-primary">Total Control.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The first energy monitor built specifically for the Nigerian power reality.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex gap-6 p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
