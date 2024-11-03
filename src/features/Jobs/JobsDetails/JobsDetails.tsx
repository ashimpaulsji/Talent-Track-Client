'use client'
import Link from "next/link"
import dynamic from "next/dynamic";
import Image from "next/image"
import { MapPin, Building2, Calendar, Clock, Briefcase, ChevronRight, Share2, BookmarkPlus } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/separator"
import { Badge } from "@/src/components/ui/badge"
import { useMemo } from "react"
import { Job } from "@/src/types/JobTypes"
import { JobDetailsSkeleton } from "./@components/JobDetailsSkeleton"
import { useRouter } from "next/navigation";
const SimilarJobs = dynamic(() => import("./@components/SimilarJobs"), { ssr: false });
const FeaturedJobs = dynamic(() => import("./@components/FeaturedJobs"), { ssr: false });


export default function JobDetails({ job }: { job?: Job }) {
    const encodedLocation = useMemo(() => encodeURIComponent(job?.location ?? ''), [job?.location]);
    const mapSrc = useMemo(() => {
        return `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodedLocation}+(${encodeURIComponent(job?.company_details?.company_name ?? '')})&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
    }, [encodedLocation, job?.company_details?.company_name]);
    const router = useRouter();

    const handelViewSimilarJobs = () => {
        router.push(`/jobs/${job?.id}`);
    }

    if (!job) {
        return <JobDetailsSkeleton />
    }

    return (
        <div className="mx-auto p-4 space-y-6">
            <div className="w-full h-40 sm:h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                    src={job.company_details?.comany_cover_image ?? "/placeholder.svg?height=400&width=1200"}
                    alt={`${job.company_details?.company_name ?? 'Company'} Office`}
                    width={1200}
                    height={400}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-blue-700">{job.title}</h1>
                            <p className="text-sm sm:text-base text-blue-600">{job.category}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" className="text-blue-600 border-blue-300 hover:bg-blue-50">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </Button>
                            <Button variant="outline" size="sm" className="text-blue-600 border-blue-300 hover:bg-blue-50">
                                <BookmarkPlus className="w-4 h-4 mr-2" />
                                Save
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{job.company_details?.company_industry}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{job.experience_level}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>Posted {job.posted_time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{job.employment_type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-blue-700">{job.salary_range}</span>
                            <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                        </div>
                    </div>

                    <Separator className="bg-blue-200" />

                    <div className="space-y-4">
                        <h2 className="text-lg sm:text-xl font-semibold text-blue-700">Job Description</h2>
                        <p className="text-sm sm:text-base text-blue-800">{job.description}</p>

                        <h3 className="text-base sm:text-lg font-semibold text-blue-700">Requirements</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-blue-800">
                            {job.requirements?.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>

                        <h3 className="text-base sm:text-lg font-semibold text-blue-700">Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-blue-800">
                            {job.responsibilities?.map((resp, index) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    {/* Company Card */}
                    <Card className="border-blue-200">
                        <CardContent className="p-4 sm:p-6 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <Image
                                        src={job.company_details?.company_logo ?? "/placeholder.svg?height=64&width=64"}
                                        alt={job.company_details?.company_name ?? "Company Logo"}
                                        width={64}
                                        height={64}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-700">{job.company_details?.company_name}</h3>
                                    <p className="text-sm text-blue-600">{job.company_details?.company_industry}</p>
                                </div>
                            </div>
                            <div className="aspect-video relative rounded-lg overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src={mapSrc}
                                >
                                    <a href="https://www.gps.ie/">gps trackers</a>
                                </iframe>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                <Link href={job.company_details?.company_website} target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Similar Jobs */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-blue-700">Similar jobs</h3>
                        <div className="space-y-4">
                            {job.similar_jobs?.slice(0, 3).map((similarJob, index) => (
                                <SimilarJobs key={index} similarJob={{ ...similarJob, id: similarJob?.id?.toString() }} />
                            ))}
                        </div>
                        <Button
                            onClick={handelViewSimilarJobs}
                            variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                            View all
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-lg sm:text-xl font-semibold text-blue-700">Featured Jobs</h2>
                <FeaturedJobs />
            </div>
        </div>
    )
}
