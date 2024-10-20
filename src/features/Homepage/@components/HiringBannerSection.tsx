import React from 'react'
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import { HiringBanner } from "@/src/assets"
import { motion } from "framer-motion"

const MotionButton = motion(Button)

const HiringBannerSection = () => {
  return (
    <div className='container mx-auto'>
          <motion.div 
          className="my-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  WE ARE HIRING
                </motion.h3>
                <motion.p 
                  className="text-xl mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Let&apos;s Work Together & Explore Opportunities
                </motion.p>
                <MotionButton 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply now
                </MotionButton>
              </div>
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Image
                  src={HiringBanner}
                  width={400}
                  height={400}
                  alt="Hiring illustration"
                  className="w-80 h-auto"
                />
              </motion.div>
            </div>
          </Card>
        </motion.div>
    </div>
  )
}

export default HiringBannerSection