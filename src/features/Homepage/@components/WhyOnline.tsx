import React from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Search, Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";

const WhyJobPortal = () => {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Easy Job Search",
      description:
        "Find your dream job quickly with our advanced search and matching algorithms.",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: "Efficient Hiring",
      description: "Post jobs and find the perfect candidates faster than ever.",
      color: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Quality Matches",
      description: "Connect with top talent or find jobs that match your skills perfectly.",
      color: "bg-yellow-50",
      iconBg: "bg-yellow-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Why Choose Our Job Portal?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting talented professionals with exciting opportunities and helping employers find their ideal candidates.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`${benefit.color} border-none w-full shadow-lg h-full`}>
                <CardContent className="pt-6 flex flex-col h-full">
                  <div
                    className={`${benefit.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex-grow">
                    {benefit.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="text-blue-500 w-fit p-0 m-0 hover:text-blue-700 "
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default WhyJobPortal;