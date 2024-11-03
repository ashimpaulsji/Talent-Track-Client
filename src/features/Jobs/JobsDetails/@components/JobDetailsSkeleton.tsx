import { Skeleton } from "@/src/components/ui/skeleton"
import { Card, CardContent } from "@/src/components/ui/card"

export function JobDetailsSkeleton() {
    return (
        <div className="mx-auto p-4 space-y-6">
            <Skeleton className="w-full h-40 sm:h-48 md:h-64 rounded-lg" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <Skeleton className="h-8 w-64 mb-2" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Skeleton className="h-9 w-24" />
                            <Skeleton className="h-9 w-24" />
                            <Skeleton className="h-9 w-24" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[...Array(6)].map((_, index) => (
                            <Skeleton key={index} className="h-6 w-full" />
                        ))}
                    </div>

                    <Skeleton className="h-0.5 w-full" />

                    <div className="space-y-4">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />

                        <Skeleton className="h-6 w-40 mt-4" />
                        {[...Array(4)].map((_, index) => (
                            <Skeleton key={index} className="h-4 w-full" />
                        ))}

                        <Skeleton className="h-6 w-40 mt-4" />
                        {[...Array(4)].map((_, index) => (
                            <Skeleton key={index} className="h-4 w-full" />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <Card className="border-blue-200">
                        <CardContent className="p-4 sm:p-6 space-y-4">
                            <div className="flex items-center gap-4">
                                <Skeleton className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg" />
                                <div>
                                    <Skeleton className="h-5 w-32 mb-2" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                            </div>
                            <Skeleton className="aspect-video w-full rounded-lg" />
                            <Skeleton className="h-10 w-full" />
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <Skeleton className="h-6 w-32" />
                        {[...Array(3)].map((_, index) => (
                            <Card key={index} className="border-blue-200">
                                <CardContent className="p-4">
                                    <div className="flex items-start gap-4">
                                        <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded" />
                                        <div className="flex-1 space-y-2">
                                            <Skeleton className="h-5 w-3/4" />
                                            <Skeleton className="h-4 w-1/2" />
                                            <Skeleton className="h-4  w-2/3" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Skeleton className="h-9 w-24" />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                        <Card key={index} className="border-blue-200">
                            <CardContent className="p-4">
                                <div className="flex items-start gap-4">
                                    <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="h-5 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                        <Skeleton className="h-4 w-2/3" />
                                        <Skeleton className="h-4 w-1/3" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}