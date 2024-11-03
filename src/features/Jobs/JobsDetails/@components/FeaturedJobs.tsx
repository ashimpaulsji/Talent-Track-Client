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
import { Building2, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const MotionCard = motion(Card)

const featuredJobs = [
    { title: "Frontend Developer", company: "TechCorp Ltd", location: "Remote", salary: "$90k-$110k" },
    { title: "UX Designer", company: "DesignStudio Inc", location: "New York", salary: "$80k-$100k" },
    { title: "Full Stack Engineer", company: "WebSolutions Co", location: "San Francisco", salary: "$110k-$130k" },
    { title: "Data Scientist", company: "DataTech Systems", location: "Boston", salary: "$100k-$120k" },
    { title: "Product Manager", company: "InnovateCorp", location: "Seattle", salary: "$120k-$150k" },
    { title: "DevOps Engineer", company: "CloudOps Ltd", location: "Remote", salary: "$95k-$115k" },
]

export default function FeaturedJobs() {
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
        <div className="">
            <div className="relative"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full mx-auto px-12"
                >
                    <CarouselContent>
                        {featuredJobs.map((job, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                                <div className="p-1 ">
                                    <MotionCard
                                        className="cursor-pointer bg-gradient-to-b from-blue-50 to-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-700">{job.title}</h4>
                                                    <p className="text-sm text-blue-600">{job.company}</p>
                                                    <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-blue-500">
                                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <p className="mt-2 font-semibold text-blue-700">{job.salary}</p>
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
    )
}