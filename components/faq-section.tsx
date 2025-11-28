import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Is Onehub easy to install?",
        answer: "Yes. It installs at the main breaker and includes a guided calibration process. No invasive wiring required.",
    },
    {
        question: "Will it work in rented apartments?",
        answer: "Yes. Onehub is fully renter-friendly and does not require changing any wiring in your home.",
    },
    {
        question: "Does it work without Wi-Fi?",
        answer: "Yes. Onehub can use GSM as the primary or backup connection, so it works even without Wi-Fi.",
    },
    {
        question: "Will it work with my inverter and generator?",
        answer: "Yes. Onehub works across Grid, Generator, Inverter, and Solar—giving you complete visibility.",
    },
    {
        question: "When will Onehub be available?",
        answer: "Early access units will begin rolling out soon. Join the waitlist to secure yours and get priority pricing.",
    },
]

export function FAQSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about Onehub
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                            >
                                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ScrollReveal>
            </div>
        </section>
    )
}
