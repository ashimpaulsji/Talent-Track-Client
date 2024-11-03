'use-client';
import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { blueTheme } from "../Jobs";
import { Job } from "@/src/types/JobTypes";
import { useRouter } from "next/navigation";

interface JobCardProps {
    job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
    const router = useRouter();

    const handleApplyNow = () => {
        router.push(`/apply/${job?.id}`);
    };

    const handleJobClick = () => {
        router.push(`/jobs/${job?.id}`);
    }

    return (
        <>
            <Card className="h-full border-gray-200 hover:border-blue-300 transition-colors shadow-sm hover:shadow-md flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image
                            width={32}
                            height={32}
                            src={job?.company_details?.company_logo ?? "/default-logo.png"}
                            alt={job?.company_details?.company_name ?? "Company Logo"}
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate cursor-pointer"
                            onClick={handleJobClick}
                        >{job?.title ?? "Job Title"}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">{job?.location ?? "Location"}</span>
                        </div>
                    </div>
                    {job?.is_recent && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 flex-shrink-0">New</Badge>
                    )}
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                            {job?.employment_type ?? "Employment Type"}
                        </Badge>
                        <span>•</span>
                        <span>{job?.posted_time ?? "Posted Time"}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        {job?.description ? (
                            job.description.length > 100 ? `${job.description.slice(0, 100)}...` : job.description
                        ) : "Job Description"}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {job?.tags?.slice(0, 3)?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700">
                                {tag}
                            </Badge>
                        ))}
                        {job?.tags?.length > 3 && (
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                                +{job.tags.length - 3}
                            </Badge>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t pt-4 mt-auto">
                    <div className="font-semibold text-blue-600">
                        {job?.salary_range ?? "Salary Range"}
                    </div>
                    <Button className={cn(blueTheme.accent, blueTheme["primary-foreground"])}
                        onClick={handleApplyNow}
                    >
                        Apply Now
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
};
