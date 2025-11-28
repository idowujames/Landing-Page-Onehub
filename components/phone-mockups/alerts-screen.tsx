"use client"

import { motion } from "framer-motion"
import {
  Zap,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Bell,
  Home,
  BarChart3,
  Cpu,
  Settings,
  Signal,
  Wifi,
  Battery,
  BellRing,
} from "lucide-react"

export function AlertsScreen() {
  const alerts = [
    {
      title: "Grid Power Restored",
      message: "Power came back at 2:34 PM after 3h outage",
      time: "2m ago",
      icon: CheckCircle2,
      iconBg: "bg-emerald-500",
      cardBg: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Iron Left On",
      message: "Electric iron running for 45 mins. Turn off to save ₦300/hr",
      time: "15m ago",
      icon: AlertTriangle,
      iconBg: "bg-amber-500",
      cardBg: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      title: "Grid Power Lost",
      message: "Switched to inverter at 11:22 AM",
      time: "3h ago",
      icon: Zap,
      iconBg: "bg-red-500",
      cardBg: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Savings Tip",
      message: "Your fridge uses 15% more power than average",
      time: "5h ago",
      icon: Lightbulb,
      iconBg: "bg-violet-500",
      cardBg: "bg-violet-50",
      borderColor: "border-violet-200",
    },
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
                <h3 className="text-slate-900 font-bold text-lg">Alerts</h3>
                <p className="text-slate-500 text-[10px]">Stay informed about your energy</p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <BellRing size={16} className="text-primary" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold border-2 border-slate-100"
                >
                  4
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex gap-2 mb-4"
            >
              <span className="px-3 py-1.5 bg-primary text-white text-[10px] font-medium rounded-full">All</span>
              <span className="px-3 py-1.5 bg-white text-slate-500 text-[10px] font-medium rounded-full">Power</span>
              <span className="px-3 py-1.5 bg-white text-slate-500 text-[10px] font-medium rounded-full">Devices</span>
              <span className="px-3 py-1.5 bg-white text-slate-500 text-[10px] font-medium rounded-full">Tips</span>
            </motion.div>

            {/* Alert List */}
            <div className="space-y-2 flex-1">
              {alerts.map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={`${alert.cardBg} p-3 rounded-xl flex items-start gap-2.5 border ${alert.borderColor}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
                    className={`w-8 h-8 ${alert.iconBg} rounded-lg flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    <alert.icon size={14} className="text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-slate-900 font-semibold text-[11px]">{alert.title}</p>
                      <span className="text-slate-400 text-[8px] shrink-0">{alert.time}</span>
                    </div>
                    <p className="text-slate-600 text-[9px] mt-0.5 leading-relaxed">{alert.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Settings */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-3"
            >
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Quick Settings</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2.5 rounded-xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-slate-900 font-medium text-[10px]">Grid Alerts</p>
                    <p className="text-primary font-semibold text-[9px]">On</p>
                  </div>
                  <div className="w-8 h-5 bg-primary rounded-full flex items-center justify-end px-0.5">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-slate-900 font-medium text-[10px]">Daily Summary</p>
                    <p className="text-primary font-semibold text-[9px]">6:00 PM</p>
                  </div>
                  <div className="w-8 h-5 bg-primary rounded-full flex items-center justify-end px-0.5">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
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
              <Home size={18} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">Home</span>
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
              <Bell size={18} className="text-primary" />
              <span className="text-[9px] font-medium text-primary">Alerts</span>
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
