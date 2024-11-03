import { Search } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { blueTheme } from "../Jobs";

export const SearchSection = () => (
    <div className="mx-auto px-4 -mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-4">
            
            {/* Industry Filter */}
            <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="san-francisco">San Francisco</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="berlin">Berlin</SelectItem>
                    <SelectItem value="sydney">Sydney</SelectItem>
                    <SelectItem value="tokyo">Tokyo</SelectItem>
                    <SelectItem value="toronto">Toronto</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
            </Select>

            {/* Search Input */}
            <div className="flex-1 relative">
                <Input
                    placeholder="Search jobs..."
                    className="w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Search Button */}
            <Button className={cn("w-full md:w-auto", blueTheme.accent, blueTheme["primary-foreground"])}>
                Search Jobs
            </Button>
        </div>
    </div>
);
