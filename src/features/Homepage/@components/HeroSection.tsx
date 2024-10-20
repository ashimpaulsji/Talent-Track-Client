"use client";
import React from "react";
import Image from "next/image";
import { Briefcase, Code, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { HeroLeftBanner } from "@/src/assets";
import { MdCampaign } from "react-icons/md";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              variants={fadeInUp}
            >
              Connecting <span className="text-blue-600">Talent</span> with Opportunities
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Find your dream job or the perfect candidate. Your next career move or ideal hire is just a click away.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                  Find Jobs
                  <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Post a Job
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">
                TOP JOB CATEGORIES
              </h3>
              <motion.div
                className="flex flex-wrap gap-6"
                variants={stagger}
              >
                {[
                  { icon: Briefcase, label: "Business" },
                  { icon: Code, label: "Technology" },
                  { icon: MdCampaign, label: "Marketing" },
                ].map((category) => (
                  <motion.div
                    key={category.label}
                    className="flex items-center gap-2 bg-white p-3 px-4 rounded-full shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon size={24} className="text-blue-500" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Image
                src={HeroLeftBanner}
                alt="Job seeker and employer"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;