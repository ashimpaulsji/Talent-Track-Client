import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { blueTheme } from "../Jobs";

const industries = [
    { name: "All", count: 180 },
    { name: "Software", count: 12 },
    { name: "Finance", count: 23 },
    { name: "Recruiting", count: 43 },
    { name: "Management", count: 65 },
    { name: "Advertising", count: 76 },
];

const locations = [
    "New York, US",
    "San Francisco, US",
    "London, UK",
    "Berlin, Germany",
    "Sydney, Australia",
    "Remote",
];

export const Sidebar = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:w-64 flex-shrink-0"
    >
        <div className="bg-white rounded-lg shadow-md p-6">
            
            {/* Filter Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="link" className={blueTheme.primary}>
                    Reset All
                </Button>
            </div>

            {/* Filter Options */}
            <div className="space-y-6">
                
                {/* Location Filter */}
                <div>
                    <h3 className="font-medium mb-3">Location</h3>
                    <div className="space-y-2">
                        {locations.map((location) => (
                            <div key={location} className="flex items-center gap-2">
                                <Checkbox id={location} />
                                <label htmlFor={location} className="text-sm text-gray-700">
                                    {location}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industry Filter */}
                <div>
                    <h3 className="font-medium mb-3">Industry</h3>
                    {industries.map((industry) => (
                        <div key={industry.name} className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id={industry.name} />
                                <label htmlFor={industry.name} className="text-sm text-gray-700">
                                    {industry.name}
                                </label>
                            </div>
                            <span className="text-xs text-gray-500">{industry.count}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);
