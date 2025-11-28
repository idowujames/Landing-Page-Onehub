import { TrendingUp, Zap, Sun } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function WhyNowSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Nigeria's Power System Is Changing. Your Home Should Too.
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Tariffs are rising. Fuel is expensive. Solar installations are growing. Hybrid energy setups are now the norm.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-xl font-semibold">Onehub gives you the visibility you need to thrive in this new reality.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="flex items-start gap-3">
                                <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-medium mb-1">Rising Costs</p>
                                    <p className="text-sm text-slate-400">Track and reduce your energy spend</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Sun className="h-5 w-5 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-medium mb-1">Hybrid Systems</p>
                                    <p className="text-sm text-slate-400">Monitor all power sources in one app</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Zap className="h-5 w-5 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-medium mb-1">Smart Control</p>
                                    <p className="text-sm text-slate-400">Make informed decisions remotely</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
