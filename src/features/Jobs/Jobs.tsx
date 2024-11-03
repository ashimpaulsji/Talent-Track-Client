"use client"
import { HeroSection } from "./@components/JobHeroSection";
import { SearchSection } from "./@components/JobSearchSection";
import { Sidebar } from "./@components/JobSidebar";
import { JobListings } from "./@components/JobListings";
import { jobs } from "@/src/constants/data/jobdata";

export const blueTheme = {
    primary: "text-blue-600",
    "primary-foreground": "text-white",
    secondary: "bg-blue-100 text-blue-900",
    accent: "bg-blue-600 hover:bg-blue-700",
};

export default function Jobs() {

    return (
        <div className="min-h-screen w-full">
            <HeroSection />
            <SearchSection />
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar />
                    <JobListings jobs={jobs} isLoading={false} />
                </div>
            </div>
        </div>
    );
}