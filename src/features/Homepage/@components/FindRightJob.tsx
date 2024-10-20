import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { FindRighetJobBanner } from "@/src/assets";

const FindRightJob = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Find{" "}
              <span className="relative">
                Job
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>{" "}
              the right way.
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={itemVariants}
            >
              Connect with a vast network of employers and opportunities to find the perfect job that matches your skills and aspirations.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Search Jobs
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={FindRighetJobBanner}
              alt="Professional searching for jobs"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindRightJob;