import React from 'react';
import { Tabs, TabsContent } from "@/src/components/ui/tabs";
import { CompanyType } from '@/src/types/CompanyType';
import AboutTab from './AboutTab';
import CultureTab from './CultureTab';
import BenefitsTab from './BenefitsTab';
import JobsTab from './JobsTab';
 

interface CompanyTabsProps {
  activeTab: string;
  companyData: CompanyType;
}

const CompanyTabs: React.FC<CompanyTabsProps> = ({ activeTab, companyData }) => {
  return (
    <Tabs value={activeTab} className="w-full">
      <TabsContent value="about">
        <AboutTab companyData={companyData} />
      </TabsContent>
      <TabsContent value="culture">
        <CultureTab companyData={companyData} />
      </TabsContent>
      <TabsContent value="benefits">
        <BenefitsTab companyData={companyData} />
      </TabsContent>
      <TabsContent value="jobs">
        <JobsTab companyData={companyData} />
      </TabsContent>
    </Tabs>
  );
};

export default CompanyTabs;