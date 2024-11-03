import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { CompanyType } from '@/src/types/CompanyType';

interface CultureTabProps {
  companyData: CompanyType;
}

const CultureTab: React.FC<CultureTabProps> = ({ companyData }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-blue-800">Company Culture</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{companyData.culture}</p>
      </CardContent>
    </Card>
  );
};

export default CultureTab;