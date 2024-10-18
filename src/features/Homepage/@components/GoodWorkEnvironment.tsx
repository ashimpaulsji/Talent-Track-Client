import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { GoodWorkEnvrionmentBanner } from "@/src/assets";

const GoodWorkEnvironment = () => {
  const features = [
    {
      title: "See Work as it's Done",
      description:
        "Check in on your contractors as easily as if you were in the same office.",
    },
    {
      title: "Build a Team of Experts",
      description:
        "Select from a global talent pool of experts that will help you build business faster than ever.",
    },
    {
      title: "Eliminate Payroll Hassle",
      description:
        "We'll manage payment and invoicing for all your hires providing you with everything you need to work at ease.",
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
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8"
              variants={itemVariants}
            >
              Guaranteed Work.
              <br />
              Guaranteed Payment.
            </motion.h2>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-5 h-5 text-green-600" />
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
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <Image
                src={GoodWorkEnvrionmentBanner}
                alt="Work environment collage"
                layout="fill"
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
              className="absolute top-1/2 -right-8 transform -translate-y-1/2"
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
                  fill="#22C55E"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoodWorkEnvironment;
