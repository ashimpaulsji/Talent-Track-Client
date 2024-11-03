'use client'
import { useState } from "react"
import { List, Grid } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { motion } from "framer-motion"
import { JobCard } from "./JobCard"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/src/components/ui/pagination"
import { blueTheme } from "../Jobs"
import { Job } from "@/src/types/JobTypes"
import { cn } from "@/src/lib/utils"
import { JobListingsSkeleton } from "./JobListingsSkeleton"

interface JobListingsProps {
    jobs?: Job[]
    isLoading: boolean
}

export const JobListings = ({ jobs = [], isLoading }: JobListingsProps) => {
    const [viewType, setViewType] = useState<"grid" | "list">("grid")
    const [currentPage, setCurrentPage] = useState(1)
    const jobsPerPage = 9
    const indexOfLastJob = currentPage * jobsPerPage
    const indexOfFirstJob = indexOfLastJob - jobsPerPage
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)
    const totalPages = Math.ceil(jobs.length / jobsPerPage)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const getPageRange = () => {
        const delta = 2
        const range = []
        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i)
        }

        if (currentPage - delta > 2) {
            range.unshift("...")
        }
        if (currentPage + delta < totalPages - 1) {
            range.push("...")
        }

        range.unshift(1)
        if (totalPages !== 1) {
            range.push(totalPages)
        }

        return range
    }

    if (isLoading) {
        return <JobListingsSkeleton />
    }

    return (
        <div className="flex-1">
            <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-medium">{indexOfFirstJob + 1}-{Math.min(indexOfLastJob, jobs.length)}</span> of{" "}
                        <span className="font-medium">{jobs.length}</span> jobs
                    </p>

                    <div className="flex items-center gap-4">
                        <Select defaultValue="12">
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Show" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="12">Show 12</SelectItem>
                                <SelectItem value="24">Show 24</SelectItem>
                                <SelectItem value="36">Show 36</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select defaultValue="newest">
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="newest">Newest Post</SelectItem>
                                <SelectItem value="oldest">Oldest Post</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="flex gap-1">
                            <Button
                                variant={viewType === "list" ? "default" : "outline"}
                                size="icon"
                                onClick={() => setViewType("list")}
                                className={cn(viewType === "list" && blueTheme.accent, viewType === "list" && blueTheme["primary-foreground"])}
                            >
                                <List className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={viewType === "grid" ? "default" : "outline"}
                                size="icon"
                                onClick={() => setViewType("grid")}
                                className={cn(viewType === "grid" && blueTheme.accent, viewType === "grid" && blueTheme["primary-foreground"])}
                            >
                                <Grid className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={`grid gap-6 ${viewType === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                    {currentJobs.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <JobCard job={job} />
                        </motion.div>
                    ))}
                </div>

                <Pagination className="my-4">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage > 1) handlePageChange(currentPage - 1)
                                }}
                            />
                        </PaginationItem>
                        {getPageRange().map((page, index) => (
                            <PaginationItem key={index}>
                                {page === "..." ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationLink
                                        href="#"
                                        isActive={currentPage === page}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handlePageChange(page as number)
                                        }}
                                    >
                                        {page}
                                    </PaginationLink>
                                )}
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage < totalPages) handlePageChange(currentPage + 1)
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}


export default JobListings