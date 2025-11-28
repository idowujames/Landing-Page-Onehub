import { Briefcase, Home, TrendingDown, Lightbulb, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const useCases = [
    {
        icon: Briefcase,
        title: "When you're at work",
        description: "Check if grid was available and for how long. Know if you need to buy fuel before going home.",
    },
    {
        icon: Zap,
        title: "When your prepaid units finish too fast",
        description: "See which appliance consumed the most and adjust easily.",
    },
    {
        icon: Home,
        title: "When you run a small business",
        description: "Track generator runtime, energy-expensive equipment, and cost patterns across the day.",
    },
    {
        icon: TrendingDown,
        title: "When you want to cut costs",
        description: "Get simple suggestions that reduce energy waste without disrupting your routine.",
    },
]

export function UseCasesSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        Built for Real Nigerian Homes and Businesses
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Onehub works the way you live—giving you the information you need, exactly when you need it.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="bg-card rounded-2xl p-6 border border-border">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <useCase.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground mb-2">{useCase.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
