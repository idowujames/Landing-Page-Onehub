"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, CheckCircle2, Loader2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call
    // TODO: Replace this with actual email service integration
    // Example: await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify({ email }) })
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Email submitted:", email)
    setStatus("success")
    setEmail("")
  }

  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Control Your Power. Reduce Your Costs.
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Join the waitlist and be the first to experience Onehub.
              </p>

              {status === "success" ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-6 border border-white/20 animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                  <p className="text-white/80">
                    Thanks for joining. We'll keep you updated on our launch.
                  </p>
                  <Button
                    variant="link"
                    className="text-white mt-4 hover:text-white/80"
                    onClick={() => setStatus("idle")}
                  >
                    Add another email
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
                  <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-white rounded-xl focus-within:ring-2 focus-within:ring-white/50 transition-all">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    className="gap-2 shrink-0"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join the Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Priority access when we launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Discounted early pricing</span>
                </div>
              </div>

              <p className="text-xs text-white/60 mt-6">
                No spam. You'll only receive essential updates.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
