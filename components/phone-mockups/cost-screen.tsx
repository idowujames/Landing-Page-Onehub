"use client"

import { motion } from "framer-motion"
import { Home, BarChart3, Cpu, Bell, Settings, Signal, Wifi, Battery, TrendingUp, ChevronRight } from "lucide-react"

export function CostScreen() {
  const breakdown = [
    { name: "Air Conditioner", percent: 32, amount: "₦3,200", color: "from-primary to-primary/80" },
    { name: "Deep Freezer", percent: 18, amount: "₦1,800", color: "from-sky-500 to-sky-400" },
    { name: "Water Pump", percent: 15, amount: "₦1,500", color: "from-blue-500 to-blue-400" },
    { name: "Refrigerator", percent: 12, amount: "₦1,200", color: "from-emerald-500 to-emerald-400" },
    { name: "Television", percent: 14, amount: "₦1,400", color: "from-violet-500 to-violet-400" },
    { name: "Fan", percent: 9, amount: "₦900", color: "from-amber-500 to-amber-400" },
  ]

  return (
    <div className="relative w-[280px] md:w-[320px]">
      {/* Phone Frame */}
      <div className="bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="absolute top-0 inset-x-0 h-11 bg-slate-100 z-10 px-6 flex items-end pb-1 justify-between">
            <span className="text-[11px] font-semibold text-slate-900">9:41</span>
            <div className="flex items-center gap-1">
              <Signal size={12} className="text-slate-900" />
              <Wifi size={12} className="text-slate-900" />
              <Battery size={14} className="text-slate-900" />
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-7 z-20 flex justify-center">
            <div className="w-28 h-6 bg-black rounded-b-3xl" />
          </div>

          {/* Screen Content */}
          <div className="pt-12 px-4 pb-20 min-h-[580px] flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="text-slate-900 font-bold text-lg">Cost Breakdown</h3>
                <p className="text-slate-500 text-[10px]">Track where your units go</p>
              </div>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-slate-600">AO</span>
              </div>
            </motion.div>

            {/* Prepaid Balance Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 text-white mb-3 shadow-lg shadow-primary/30 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-primary-foreground/80 text-[10px] font-medium">Last Topup: ₦10,000</span>
                <span className="text-[10px] font-semibold bg-white/20 px-2 py-0.5 rounded">Nov 15</span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold mb-0.5"
              >
                ₦4,230
              </motion.p>
              <p className="text-primary-foreground/70 text-[10px]">remaining · ~3 days left</p>

              <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "42%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[8px] text-white/60">₦0</span>
                <span className="text-[8px] text-white/60">₦10,000</span>
              </div>
            </motion.div>

            {/* Breakdown List */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-3 shadow-sm flex-1"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] font-bold text-primary uppercase tracking-wider">Where Your Units Went</p>
                <ChevronRight size={14} className="text-slate-300" />
              </div>

              <div className="space-y-2.5">
                {breakdown.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-700 font-medium text-[10px]">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[9px]">{item.percent}%</span>
                        <span className="text-slate-900 font-bold text-[10px]">{item.amount}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Budget Alert - Subtle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-amber-50/50 rounded-xl p-2.5 shadow-sm border border-amber-100 mt-3"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 bg-amber-100 rounded-md flex items-center justify-center shrink-0">
                  <Bell size={10} className="text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] text-slate-700 leading-tight">
                    <span className="font-semibold">AC Budget:</span> ₦1,200/₦1,500 used this week
                  </p>
                </div>
              </div>
              <div className="h-1 bg-amber-200/50 rounded-full overflow-hidden ml-7">
                <motion.div
                  className="h-full bg-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around px-4 rounded-b-[2.5rem]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Home size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Home</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="flex flex-col items-center gap-0.5"
            >
              <BarChart3 size={18} className="text-primary" />
              <span className="text-[9px] font-medium text-primary">Stats</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Cpu size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Devices</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Bell size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Alerts</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Settings size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Settings</span>
            </motion.div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 inset-x-0 flex justify-center">
            <div className="w-24 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
