'use-client';
import React from 'react'
import { Card, CardContent } from "@/src/components/ui/card"
import Image from 'next/image';
import { ChevronRight, MapPin } from 'lucide-react';

interface CompanyDetails {
    company_logo: string;
    company_name: string;
}

interface SimilarJob {
    id: string;
    title: string;
    location: string;
    salary_range: string;
    company_details: CompanyDetails;
}

const SimilarJobs = ({ similarJob }: { similarJob: SimilarJob }) => {
    return (
        <>
            <Card key={similarJob.id} className="border-blue-200 hover:bg-blue-50 transition-colors">
                <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Image
                                src={similarJob.company_details?.company_logo ?? "/placeholder.svg?height=48&width=48"}
                                alt={similarJob.company_details?.company_name ?? "Company Logo"}
                                width={48}
                                height={48}
                                className="rounded"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold truncate text-blue-700">{similarJob.title}</h4>
                            <p className="text-sm text-blue-600">{similarJob.company_details?.company_name}</p>
                            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-blue-500">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{similarJob.location}</span>
                                <span>•</span>
                                <span>{similarJob.salary_range}</span>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default SimilarJobs