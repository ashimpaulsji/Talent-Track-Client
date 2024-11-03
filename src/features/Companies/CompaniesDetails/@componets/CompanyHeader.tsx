import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CompanyType } from '@/src/types/CompanyType';

interface CompanyHeaderProps {
  companyData: CompanyType;
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ companyData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-lg"
    >
      <Image
        src={companyData.cover_image || '/default-cover.jpg'}
        alt={`${companyData.company_name} cover`}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{companyData.company_name}</h1>
        <p className="text-base sm:text-lg md:text-xl">{companyData.industry}</p>
      </div>
    </motion.div>
  );
};

export default CompanyHeader;