'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Button } from "@/src/components/ui/button"
import { ChevronDown, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tab {
  value: string
  label: string
  icon: React.ReactNode
}

const tabs: Tab[] = [
  { value: "about", label: "About", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> },
  { value: "culture", label: "Culture", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { value: "benefits", label: "Benefits", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
  { value: "jobs", label: "Open Positions", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
]

export default function CompanyDetailsTabs({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative mb-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="md:hidden w-full">
            <Button
              variant="outline"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full justify-between"
            >
              <span className="flex items-center">
                {tabs.find(tab => tab.value === activeTab)?.icon}
                <span className="ml-2">{tabs.find(tab => tab.value === activeTab)?.label}</span>
              </span>
              {isMenuOpen ? <X size={20} /> : <ChevronDown size={20} />}
            </Button>
          </div>
        </div>
      </Tabs>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg md:hidden"
          >
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                variant="ghost"
                onClick={() => {
                  setActiveTab(tab.value)
                  setIsMenuOpen(false)
                }}
                className={`w-full justify-start px-4 py-2 text-left text-sm ${
                  activeTab === tab.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center">
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </span>
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}