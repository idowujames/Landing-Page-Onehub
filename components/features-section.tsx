import {
  Zap,
  PiggyBank,
  Bell,
  Lightbulb,
  BarChart3,
  Smartphone,
  PieChart,
  TrendingDown,
  Clock,
  Wallet,
  AlertTriangle,
  BatteryCharging,
  Activity,
  Target,
} from "lucide-react"
import { SmartDetectionScreen } from "./phone-mockups/smart-detection-screen"
import { DashboardScreen } from "./phone-mockups/dashboard-screen"
import { DevicesScreen } from "./phone-mockups/devices-screen"
import { CostScreen } from "./phone-mockups/cost-screen"
import { AlertsScreen } from "./phone-mockups/alerts-screen"
import { DeviceDetailScreen } from "./phone-mockups/device-detail-screen"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything you need to take control
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A powerful app that brings clarity to your energy use. Simple enough for everyone, detailed enough for the
            curious.
          </p>
        </ScrollReveal>

        {/* Feature 1: Smart Detection */}
        <ScrollReveal>
          <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-3xl opacity-60" />
                  <div className="relative">
                    <SmartDetectionScreen />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>Smart Detection</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Smart enough to identify your appliances.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                  Onehub uses a two-phase detection system. It starts with an{" "}
                  <strong className="text-foreground">Assisted Calibration</strong> wizard to "fingerprint" your major
                  appliances during setup, then uses{" "}
                  <strong className="text-foreground">Background Machine Learning</strong> to get smarter over time.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Fingerprint Phase</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Walk through a simple setup wizard. Turn on your AC, tag it in the app, and Onehub memorizes its
                        power signature immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <PieChart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Discovery Phase</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Over weeks, Onehub learns the subtle patterns of your fridge compressor, standby TV power, and
                        voltage drift to refine accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 2: Smart Dashboard */}
        <ScrollReveal>
          <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-emerald-500/20 via-transparent to-amber-500/10 rounded-full blur-3xl opacity-60" />
                  <div className="relative">
                    <DashboardScreen />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <BarChart3 className="h-4 w-4" />
                  <span>Smart Dashboard</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Your complete energy picture, at a glance.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                  Compare your usage month-over-month, track time spent on Grid vs Generator vs Inverter, and see spending
                  trends—all from one beautiful dashboard designed for Nigerian power realities.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <TrendingDown className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Usage Comparison</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        See how this month compares to last month. Track your savings and identify patterns that help you
                        reduce consumption.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <BatteryCharging className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Power Source Tracking</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Know exactly how much time you spent on Grid, Generator, and Inverter. Plan your fuel purchases
                        and battery maintenance smarter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 3: Appliance Detection */}
        <ScrollReveal>
          <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/10 rounded-full blur-3xl opacity-60" />
                  <div className="relative">
                    <DevicesScreen />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Activity className="h-4 w-4" />
                  <span>Appliance Tracking</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  See what's running at a glance.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                  Get instant visibility into which appliances are currently active—from your AC to your water pump to your deep freezer.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <Target className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Per-Appliance Costs</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        See exactly how much your AC, freezer, water pump, and other appliances cost you daily. No more
                        guessing where your units go.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <Clock className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Runtime Tracking</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Monitor how long each appliance runs, how often it cycles on/off, and whether it's behaving
                        normally or showing signs of problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 4: Device Insights */}
        <ScrollReveal>
          <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-violet-500/20 via-transparent to-primary/10 rounded-full blur-3xl opacity-60" />
                  <div className="relative">
                    <DeviceDetailScreen />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Lightbulb className="h-4 w-4" />
                  <span>Device Insights</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Drill down for detailed insights.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                  Tap any device to see its power consumption, usage patterns, and cost breakdowns. Know exactly how much each appliance costs you per day, week, or month.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <BarChart3 className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Usage Patterns</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        See hourly, daily, and weekly usage charts. Understand when your AC runs most and how it impacts your bill.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <TrendingDown className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Cost Breakdown</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Track exactly how much each device costs you. "Your AC consumed ₦850 this week" — clear, actionable data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 5: Cost Tracking */}
        <ScrollReveal>
          <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-transparent to-emerald-500/10 rounded-full blur-3xl opacity-60" />
                  <div className="relative">
                    <CostScreen />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <PiggyBank className="h-4 w-4" />
                  <span>Smart Budgeting and Planning</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Account for your unit spend.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                  See exactly where your prepaid units go. Break down your topup by appliance, set budget alerts, and
                  never be surprised by your electricity spend again.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <Wallet className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Prepaid Breakdown</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Bought ₦10,000 units? See exactly how they were spent: AC 32%, Freezer 18%, Water Pump 15%, and so
                        on. Full transparency.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <Bell className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Budget Alerts</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Set alerts like "Notify me when AC costs exceed ₦1,500 this week" and stay in control of your
                        spending before it gets out of hand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 6: Smart Alerts */}
        <ScrollReveal>
          <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-amber-500/20 via-transparent to-red-500/10 rounded-full blur-3xl opacity-60" />
                  <div className="relative">
                    <AlertsScreen />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Bell className="h-4 w-4" />
                  <span>Smart Alerts</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Stay informed, stay prepared.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                  Get notified when the grid comes up or goes down, when an appliance is left on, or when your usage is
                  unusually high. Plan your day with confidence, even when you're away from home.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <Zap className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Power Status Alerts</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Know instantly when grid power returns or goes out. Check from work if there was enough power to
                        keep your freezer cold today.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-border">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Anomaly Detection</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Get warned if an appliance is running unusually long or drawing too much power—catch problems
                        before they become expensive repairs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>


      </div>
    </section>
  )
}
