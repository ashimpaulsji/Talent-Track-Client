/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ChevronRight, DollarSign, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CompanyType } from '@/src/types/CompanyType';
import { useRouter } from 'next/navigation';

interface JobsTabProps {
  companyData: CompanyType;
}

const JobsTab: React.FC<JobsTabProps> = ({ companyData }) => {
  const router = useRouter();

  const handleApplyNow = (jobId: any) => {
    router.push(`/apply/${jobId}`);
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-blue-800">Open Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {companyData?.open_jobs?.map((position) => (
            <motion.div
              key={position?.id}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg hover:border-blue-300 transition-colors duration-300 cursor-pointer"
            >
              <div className="mb-2 sm:mb-0">
                <Link href={`/jobs/${position.id}`}>
                  <h3 className="font-semibold text-base sm:text-lg text-blue-700">{position.title}</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-600">{position.category}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                  <DollarSign size={14} className="flex-shrink-0" />
                  <span>{position.salary_range || 'Competitive'}</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                  <Clock size={14} className="flex-shrink-0" />
                  <span>{position.job_type || 'Full-time'}</span>
                </div>
                <Button
                  onClick={() => handleApplyNow(position?.id)}
                  size="sm" className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white">
                  Apply <ChevronRight size={14} className="ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobsTab;