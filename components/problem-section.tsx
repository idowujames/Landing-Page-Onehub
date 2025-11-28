import { AlertTriangle, Eye, Plug, Layers } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const problems = [
  {
    icon: Eye,
    title: "No Visibility",
    description:
      "Most Nigerians have no idea how much energy individual appliances consume or why prepaid units finish quickly.",
  },
  {
    icon: AlertTriangle,
    title: "Unpredictable Outages",
    description: "Nigeria's grid suffers frequent outages, making it impossible to plan around power availability.",
  },
  {
    icon: Plug,
    title: "Complex Installations",
    description:
      "Existing monitoring systems require invasive wiring changes and cost more than most households can afford.",
  },
  {
    icon: Layers,
    title: "Fragmented Systems",
    description:
      "Inverters, solar panels, generators—each has its own app. None provide a unified view of your energy.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Energy Management Shouldn't Be This Hard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nigerian households and businesses face unique challenges that traditional solutions don't address.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
