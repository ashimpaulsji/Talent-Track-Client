import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { GoodWorkEnvrionmentBanner } from "@/src/assets";

const JobPortalBenefits = () => {
  const features = [
    {
      title: "Efficient Job Matching",
      description:
        "Our advanced algorithms match job seekers with the most suitable opportunities based on their skills and preferences.",
    },
    {
      title: "Streamlined Application Process",
      description:
        "Job seekers can easily apply to multiple positions with just a few clicks, saving time and effort.",
    },
    {
      title: "Powerful Employer Tools",
      description:
        "Employers can post jobs, manage applications, and communicate with candidates all in one place, simplifying the hiring process.",
    },
  ];

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
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8"
              variants={itemVariants}
            >
              Connect with
              <br />
              Opportunities
            </motion.h2>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-1">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src={GoodWorkEnvrionmentBanner}
                alt="Job seeker and employer interaction"

                width={500}
                height={500}
                className="w-full h-full"
              />
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
            </div>
            <motion.div
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM37.5 26.7857H26.7857V37.5H23.2143V26.7857H12.5V23.2143H23.2143V12.5H26.7857V23.2143H37.5V26.7857Z"
                  fill="#3B82F6"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JobPortalBenefits;