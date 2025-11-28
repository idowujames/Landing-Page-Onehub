"use client"

import { motion } from "framer-motion"
import {
  Snowflake,
  Wind,
  Droplets,
  Lightbulb,
  Tv,
  Home,
  BarChart3,
  Cpu,
  Bell,
  Settings,
  Signal,
  Wifi,
  Battery,
  ChevronRight,
  Plus,
} from "lucide-react"

export function DevicesScreen() {
  const devices = [
    {
      name: "Air Conditioner",
      room: "Living Room",
      watts: "1,450W",
      status: "Running",
      icon: Wind,
      color: "bg-primary",
      isActive: true,
    },
    {
      name: "Deep Freezer",
      room: "Kitchen",
      watts: "320W",
      status: "Running",
      icon: Snowflake,
      color: "bg-sky-500",
      isActive: true,
    },
    {
      name: "Water Pump",
      room: "Utility",
      watts: "0W",
      status: "Off",
      icon: Droplets,
      color: "bg-blue-500",
      isActive: false,
    },
    {
      name: "Television",
      room: "Sitting Room",
      watts: "120W",
      status: "Running",
      icon: Tv,
      color: "bg-violet-500",
      isActive: true,
    },
    {
      name: "Lighting",
      room: "Sitting Room",
      watts: "180W",
      status: "Running",
      icon: Lightbulb,
      color: "bg-amber-500",
      isActive: true,
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
                <h3 className="text-slate-900 font-bold text-lg">Devices</h3>
                <p className="text-slate-500 text-[10px]">4 appliances currently active</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <Plus size={16} className="text-white" />
              </motion.button>
            </motion.div>

            {/* Active Summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-3 mb-4 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/70">Spent Today</p>
                  <p className="text-xl font-bold">₦2,300</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/70">Total Draw</p>
                  <p className="text-xl font-bold">2,070W</p>
                </div>
              </div>
            </motion.div>

            {/* Device List */}
            <div className="space-y-2 flex-1">
              {devices.map((device, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm"
                >
                  <div
                    className={`w-10 h-10 ${device.color} ${!device.isActive && "opacity-40"} rounded-xl flex items-center justify-center shadow-sm`}
                  >
                    <device.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 font-semibold text-[11px]">{device.name}</p>
                    <p className="text-slate-400 text-[9px]">{device.room}</p>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <div>
                      <p className={`font-bold text-[11px] ${device.isActive ? "text-primary" : "text-slate-300"}`}>
                        {device.watts}
                      </p>
                      <p className={`text-[9px] ${device.isActive ? "text-emerald-500" : "text-slate-400"}`}>
                        {device.status}
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-slate-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add Device Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full mt-3 py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-[11px] font-medium flex items-center justify-center gap-1.5"
            >
              <Plus size={14} />
              Calibrate New Device
            </motion.button>
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
              <Cpu size={18} className="text-primary" />
              <span className="text-[9px] font-medium text-primary">Devices</span>
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
