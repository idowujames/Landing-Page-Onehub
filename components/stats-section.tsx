const stats = [
  { value: "20-30%", label: "Average savings in 6 months" },
  { value: "<30 min", label: "Time to first insight" },
  { value: "7 days", label: "Offline data storage" },
  { value: "24/7", label: "Real-time monitoring" },
]

import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
