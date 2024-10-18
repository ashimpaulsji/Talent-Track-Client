"use client"; 
import React from "react";
import Image from "next/image";
import { Briefcase, Code, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { HeroLeftBanner } from "@/src/assets";
import { BsWordpress } from "react-icons/bs";
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
    <section className="bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0] py-16 md:py-24 overflow-hidden">
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
              Welcome to the World's{" "}
              <span className="text-[#22C55E]">Fastest Growing</span> Freelance Platform.
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Forget the old rules. You can have the best people. Right here. Right now.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <Button className="bg-[#22C55E] hover:bg-[#1EA34D] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                  Become a Freelancer
                  <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white transition-all duration-300">
                  Hire a Freelancer
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">
                TRENDING SERVICES
              </h3>
              <motion.div 
                className="flex flex-wrap gap-6"
                variants={stagger}
              >
                {[
                  { icon: Briefcase, label: "Designer" },
                  { icon: Code, label: "Developer" },
                  { icon: BsWordpress, label: "Wordpress" },
                ].map((service) => (
                  <motion.div 
                    key={service.label}
                    className="flex items-center gap-2 bg-white p-3 px-4 rounded-full shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <service.icon size={24} className="text-[#22C55E]" />
                    <span className="text-sm font-medium">{service.label}</span>
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
                alt="Freelancer working"
                width={600}
                height={600}
                className=" w-full h-auto"
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 bg-[#22C55E] rounded-full opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"
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