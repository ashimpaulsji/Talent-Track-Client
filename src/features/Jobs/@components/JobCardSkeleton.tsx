'use client';
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card"
import { Skeleton } from "@/src/components/ui/skeleton"

export const JobCardSkeleton = () => {
    return (
        <Card className="h-full border-gray-200 shadow-sm flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="flex-1 min-w-0">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4 mt-auto">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-28" />
            </CardFooter>
        </Card>
    )
}
