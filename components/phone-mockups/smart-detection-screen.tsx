"use client"

import { motion } from "framer-motion"
import { Zap, Home, BarChart3, Cpu, Bell, Settings, Signal, Wifi, Battery } from "lucide-react"

export function SmartDetectionScreen() {
  const breakdownItems = [
    { name: "Master Bedroom AC", cost: "₦125/hr", pct: "65%", color: "bg-red-500" },
    { name: "Water Heater", cost: "₦45/hr", pct: "25%", color: "bg-orange-500" },
    { name: "Refrigerator", cost: "₦12/hr", pct: "8%", color: "bg-blue-500" },
    { name: "Lighting & Others", cost: "₦5/hr", pct: "2%", color: "bg-slate-400" },
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="text-slate-900 font-bold text-lg">My Home</h3>
                <p className="text-slate-500 text-[10px]">Real-time monitoring</p>
              </div>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-slate-600">AO</span>
              </div>
            </motion.div>

            {/* Main Usage Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 text-white mb-4 shadow-lg shadow-primary/30 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-primary-foreground/80 text-[10px] font-medium mb-0.5">Current Usage</p>
                  <div className="flex items-baseline gap-1">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-3xl font-bold"
                    >
                      1,240
                    </motion.span>
                    <span className="text-sm opacity-80">W</span>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full"
                >
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="text-[9px] font-medium">LIVE</span>
                </motion.div>
              </div>
              <div className="flex items-center justify-between text-[10px] border-t border-white/20 pt-2 mt-2">
                <span>Grid Source</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[9px] font-semibold">50Hz Stable</span>
              </div>
            </motion.div>

            {/* Cost Breakdown */}
            <div className="flex-1">
              <p className="text-slate-500 text-[10px] font-semibold mb-2 uppercase tracking-wide">Live Breakdown</p>
              <div className="space-y-2">
                {breakdownItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="bg-white p-2.5 rounded-xl flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-1 h-6 rounded-full ${item.color}`} />
                      <div>
                        <p className="text-slate-800 font-medium text-[11px]">{item.name}</p>
                        <p className="text-slate-400 text-[9px]">{item.cost}</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-700 text-[11px]">{item.pct}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Alert */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="mt-3 bg-slate-900 text-white p-2.5 rounded-xl flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <Zap size={12} fill="currentColor" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-slate-400">Suggestion</p>
                <p className="text-[9px] font-medium leading-tight">Iron detected (1500W).</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around px-4 rounded-b-[2.5rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Home size={18} className="text-primary" />
              <span className="text-[9px] font-medium text-primary">Home</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col items-center gap-0.5"
            >
              <BarChart3 size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Stats</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Cpu size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Devices</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Bell size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Alerts</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
