import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Briefcase } from "lucide-react";

const jobCategories = [
  { title: "Technology", icon: "laptop" },
  { title: "Finance", icon: "dollar-sign" },
  { title: "Healthcare", icon: "heart" },
  { title: "Education", icon: "book" },
  { title: "Marketing", icon: "bar-chart" },
  { title: "Design", icon: "pen-tool" },
  { title: "Sales", icon: "trending-up" },
  { title: "Engineering", icon: "tool" },
];

const JobCategories = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Job Categories
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="cursor-pointer h-full border-2 border-green-100 hover:border-[#22C55E] transition-colors duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Briefcase className="w-12 h-12 text-[#22C55E] mb-2" />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg text-gray-700">
                    {category.title}
                  </CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <motion.div
          className="mt-16 bg-[#22C55E] rounded-lg p-8 text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Find Your Dream Job Today!
              </h3>
              <p className="mb-4">
                Connect with top employers and opportunities in your field.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#22C55E] hover:bg-gray-100"
                >
                  Start Your Job Search
                </Button>
              </motion.div>
            </div>
            <img
              src="/api/placeholder/300/200"
              alt="Job Search"
              className="w-64 rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobCategories;
