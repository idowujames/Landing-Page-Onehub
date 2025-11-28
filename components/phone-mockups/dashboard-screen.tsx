"use client"

import { motion } from "framer-motion"
import { Home, BarChart3, Cpu, Bell, Settings, Signal, Wifi, Battery, TrendingDown, ChevronRight } from "lucide-react"

export function DashboardScreen() {
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
                <h3 className="text-slate-900 font-bold text-lg">Dashboard</h3>
                <p className="text-slate-500 text-[10px]">November 2024</p>
              </div>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-slate-600">AO</span>
              </div>
            </motion.div>

            {/* Usage Comparison Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-4 mb-3 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Usage</p>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown size={16} className="text-emerald-500" />
                <p className="text-slate-700 text-xs">
                  You're using <span className="text-emerald-500 font-bold">23% less</span> energy this month.
                </p>
              </div>

              <div className="flex items-end gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-[9px] text-slate-500">This month</span>
                  </div>
                  <p className="text-xl font-bold text-primary">₦18,450</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="text-[9px] text-slate-500">Last month</span>
                  </div>
                  <p className="text-xl font-bold text-slate-300">₦24,100</p>
                </div>
              </div>

              {/* Animated sparkline */}
              <div className="relative h-10">
                <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                  <motion.path
                    d="M0 35 Q25 33 50 30 T100 25 T150 18 T200 15"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.path
                    d="M0 38 Q25 36 50 32 T100 26 T150 20 T200 16"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="20"
                    r="4"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Power Sources Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-4 shadow-sm mb-3"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Power Today</p>
                <span className="text-[9px] text-slate-400">18.2 hours total</span>
              </div>

              <div className="flex items-center gap-[2px] h-4 rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-emerald-500 rounded-l-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "45%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.div
                  className="h-full bg-amber-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.div
                  className="h-full bg-sky-500 rounded-r-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-600">
                    Grid <span className="text-slate-400">45%</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-slate-600">
                    Gen <span className="text-slate-400">35%</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-slate-600">
                    Inv <span className="text-slate-400">20%</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              <motion.div
                className="bg-white rounded-2xl p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[9px] text-slate-500 mb-0.5">Grid Uptime</p>
                <p className="text-xl font-bold text-slate-900">10.8h</p>
                <p className="text-[9px] text-emerald-500 font-medium">+5% vs last week</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-2xl p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[9px] text-slate-500 mb-0.5">Top Consumer</p>
                <p className="text-sm font-bold text-slate-900">AC Unit</p>
                <p className="text-[10px] text-primary font-semibold">₦890/day</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-2xl p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-[9px] text-slate-500 mb-0.5">Gen Fuel Cost</p>
                <p className="text-sm font-bold text-slate-900">₦4,200</p>
                <p className="text-[9px] text-amber-500 font-medium">6.4h runtime</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-2xl p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-[9px] text-slate-500 mb-0.5">Grid Outages Today</p>
                <p className="text-xl font-bold text-slate-900">3</p>
                <p className="text-[9px] text-red-500 font-medium">13.2h total</p>
              </motion.div>
            </div>
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
