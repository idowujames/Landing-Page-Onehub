"use client"

import { motion } from "framer-motion"
import {
  Wind,
  ChevronLeft,
  Settings,
  Lightbulb,
  Home,
  BarChart3,
  Cpu,
  Bell,
  Signal,
  Wifi,
  Battery,
  MoreHorizontal,
} from "lucide-react"

export function DeviceDetailScreen() {
  const barHeights = [45, 70, 55, 80, 65, 40, 75]

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
              className="flex items-center justify-between mb-3"
            >
              <div className="flex items-center gap-1">
                <ChevronLeft size={18} className="text-primary" />
                <span className="text-slate-500 text-[11px]">Devices</span>
              </div>
              <MoreHorizontal size={18} className="text-slate-400" />
            </motion.div>

            {/* Device Icon & Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center py-4 bg-white rounded-2xl shadow-sm mb-3"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-2 shadow-lg shadow-primary/20"
              >
                <Wind size={22} className="text-white" />
              </motion.div>
              <h2 className="text-sm font-bold text-slate-900">Air Conditioner</h2>
              <p className="text-slate-500 text-[10px]">1,450W · Living Room</p>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="mt-2 px-3 py-1 bg-emerald-100 rounded-full flex items-center gap-1"
              >
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-[9px] font-medium text-emerald-700">Currently Running</span>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-3 shadow-sm"
              >
                <p className="text-[9px] text-primary uppercase font-bold tracking-wider mb-0.5">Average</p>
                <p className="text-xl font-bold text-slate-900 leading-none">
                  1,320<span className="text-[10px] font-normal text-slate-400">w</span>
                </p>
                <p className="text-[9px] text-slate-500">while on</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-3 shadow-sm"
              >
                <p className="text-[9px] text-primary uppercase font-bold tracking-wider mb-0.5">Monthly Cost</p>
                <p className="text-xl font-bold text-slate-900 leading-none">₦8,400</p>
                <p className="text-[9px] text-slate-500">this month</p>
              </motion.div>
            </div>

            {/* Usage Chart */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-3 shadow-sm flex-1"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] text-primary uppercase font-bold tracking-wider">Usage</p>
                <div className="flex items-center gap-0.5 text-[9px]">
                  <span className="text-slate-400 px-1.5 py-0.5">DAY</span>
                  <span className="text-slate-900 font-semibold px-1.5 py-0.5 bg-slate-100 rounded-md">WK</span>
                  <span className="text-slate-400 px-1.5 py-0.5">MO</span>
                </div>
              </div>

              {/* Animated Bar Chart */}
              <div className="flex items-end gap-2 h-16 mb-2">
                {barHeights.map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                    <motion.div
                      className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-sm"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[8px] text-slate-400 font-medium">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-100">
                <div>
                  <p className="text-[8px] text-slate-400">Total Usage</p>
                  <p className="text-[10px] font-bold text-slate-900">42.8 kWh</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400">Times On</p>
                  <p className="text-[10px] font-bold text-slate-900">24x</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400">Avg Duration</p>
                  <p className="text-[10px] font-bold text-slate-900">3h 12m</p>
                </div>
              </div>
            </motion.div>

            {/* Tip Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-amber-50 rounded-xl p-2.5 border border-amber-100 mt-2"
            >
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <Lightbulb size={12} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-amber-800">Savings Tip</p>
                  <p className="text-[9px] text-amber-700 leading-relaxed">
                    Set AC to 24°C instead of 18°C to save ₦2,100/month
                  </p>
                </div>
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
              <BarChart3 size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Stats</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-0.5"
            >
              <Cpu size={18} className="text-primary" />
              <span className="text-[9px] font-medium text-primary">Devices</span>
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
