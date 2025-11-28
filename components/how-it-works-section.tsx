import { Plug, Smartphone, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Install at Your Breaker",
    description:
      "Onehub installs easily at your main breaker. No invasive rewiring required. Perfect for renters and homeowners alike.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Calibrate Your Appliances",
    description:
      "Use the guided app wizard to 'teach' Onehub your appliances. Turn them on one by one and tag each in the system.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Start Tracking",
    description:
      "See real-time data on your dashboard. Get cost breakdowns, efficiency tips, and alerts anytime, anywhere.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Up and Running in Under 30 Minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From installation to your first energy insight—it's that simple.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 right-0 w-1/2 h-0.5 bg-border" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
