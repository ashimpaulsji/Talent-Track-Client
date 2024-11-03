import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { CompanyType } from '@/src/types/CompanyType';

interface AboutTabProps {
  companyData: CompanyType;
}

const AboutTab: React.FC<AboutTabProps> = ({ companyData }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-blue-800">About {companyData.company_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">{companyData.company_description}</p>
        <h3 className="font-semibold text-lg sm:text-xl text-blue-700 mb-3">Our Mission</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{companyData.mission}</p>
      </CardContent>
    </Card>
  );
};

export default AboutTab;