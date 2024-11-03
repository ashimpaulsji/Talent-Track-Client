import { Skeleton } from "@/src/components/ui/skeleton"
import { JobCardSkeleton } from "./JobCardSkeleton"

export const JobListingsSkeleton = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <Skeleton className="h-5 w-48" />
                <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-[100px]" />
                    <Skeleton className="h-10 w-[140px]" />
                    <div className="flex gap-1">
                        <Skeleton className="h-10 w-10" />
                        <Skeleton className="h-10 w-10" />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(9)].map((_, index) => (
                    <JobCardSkeleton key={index} />
                ))}
            </div>

            <div className="flex justify-center my-4">
                <Skeleton className="h-10 w-96" />
            </div>
        </div>
    )
}
