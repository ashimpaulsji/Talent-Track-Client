'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyType } from '@/src/types/CompanyType';
import CompanyHeader from './@componets/CompanyHeader';
import CompanyInfoCard from './@componets/CompanyInfoCard';
import CompanyDetailsTabs from './@componets/CompanyDetailsTabs';
import CompanyTabs from './@componets/CompanyTabs';
 

interface CompanyDetailsProps {
  companyData: CompanyType;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyData }) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto px-4 py-8">
      <CompanyHeader companyData={companyData} />

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/3"
        >
          <CompanyInfoCard companyData={companyData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:w-2/3"
        >
          <CompanyDetailsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <CompanyTabs activeTab={activeTab} companyData={companyData} />
        </motion.div>
      </div>
    </div>
  );
}

export default CompanyDetails;