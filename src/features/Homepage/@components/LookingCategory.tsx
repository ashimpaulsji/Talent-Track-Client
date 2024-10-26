"use client"

import * as React from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const MotionCard = motion(Card)

const jobCategories = [
  { title: "Management", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", jobs: 965 },
  { title: "Retail & Products", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", jobs: 563 },
  { title: "Security Analyst", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", jobs: 254 },
  { title: "Content Writer", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", jobs: 142 },
  { title: "Market Research", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", jobs: 532 },
]

export default function JobCategories() {
  const [autoplay, setAutoplay] = React.useState(true)
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        const nextButton = document.querySelector('[data-carousel-next]')
        if (nextButton) {
          (nextButton as HTMLElement).click()
        }
      }, 3000)
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse by category
        </motion.h2>
        <motion.p
          className="text-center text-blue-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find the job that&apos;s perfect for you. About 800+ new jobs added every day
        </motion.p>

        <div className="relative"
             onMouseEnter={() => setAutoplay(false)}
             onMouseLeave={() => setAutoplay(true)}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mx-auto px-12" // Add px-12 for padding
          >
            <CarouselContent>
              {jobCategories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                  <div className="p-1">
                    <MotionCard
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CardContent className="flex flex-col items-start justify-center p-6 h-[140px]">
                        <div className="flex items-center justify-start w-full">
                          <motion.div
                            className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <svg
                              className="w-6 h-6 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={category.icon}
                              />
                            </svg>
                          </motion.div>
                          <div className="flex-grow min-w-0">
                            <h3 className="text-lg font-semibold text-blue-900 truncate">{category.title}</h3>
                            <p className="text-sm text-blue-500 mt-1">{category.jobs} Jobs Available</p>
                          </div>
                        </div>
                      </CardContent>
                    </MotionCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-200" data-carousel-prev>
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-200" data-carousel-next>
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  )
}