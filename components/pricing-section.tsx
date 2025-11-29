import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function PricingSection() {
    return (
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                        Get Early Bird Offer
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get early access and be one of the first to get Onehub.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="max-w-md mx-auto bg-background rounded-3xl border border-border/50 shadow-xl overflow-hidden relative">
                        {/* Early Bird Badge */}
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
                            EARLY BIRD OFFER
                        </div>

                        <div className="p-8 md:p-10 text-center">
                            <h3 className="text-xl font-semibold text-muted-foreground mb-2">Onehub Starter Kit</h3>
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span className="text-4xl md:text-5xl font-bold text-foreground">₦120,000</span>
                                <span className="text-lg text-muted-foreground line-through decoration-destructive/50">₦175,000</span>
                            </div>

                            <div className="space-y-4 text-left mb-8 mt-8">
                                {[
                                    "Onehub Smart Energy Monitor",
                                    "Mobile App Access",
                                    "Real-time Remote Monitoring",
                                    "Grid & Generator Detection",
                                    "1-Year Hardware Warranty",
                                    "Priority Support",
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-foreground/80 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" className="w-full gap-2">
                                Secure Early Bird Price
                                <Zap className="w-4 h-4" />
                            </Button>
                            <p className="text-xs text-muted-foreground mt-4">
                                Limited units available for the first batch.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
