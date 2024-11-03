import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { CompanyType } from '@/src/types/CompanyType';

interface BenefitsTabProps {
  companyData: CompanyType;
}

const BenefitsTab: React.FC<BenefitsTabProps> = ({ companyData }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-blue-800">Employee Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {companyData.benefits?.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BenefitsTab;