import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { MapPin, Users, Briefcase, Globe, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { CompanyType } from '@/src/types/CompanyType';
import Link from 'next/link';

interface CompanyInfoCardProps {
  companyData: CompanyType;
}

const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({ companyData }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center">
        <Image
          src={companyData.logo || '/default-logo.jpg'}
          alt={companyData.company_name}
          width={128}
          height={128}
          className="rounded-full mb-4 border-4 border-blue-100"
        />
        <CardTitle className="text-xl sm:text-2xl font-bold text-blue-800">{companyData.company_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {companyData.location && (
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={20} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">{companyData.location}</span>
            </div>
          )}
          {companyData.employees && (
            <div className="flex items-center gap-3 text-gray-600">
              <Users size={20} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">{companyData.employees} employees</span>
            </div>
          )}
          {companyData.industry && (
            <div className="flex items-center gap-3 text-gray-600">
              <Briefcase size={20} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">{companyData.industry}</span>
            </div>
          )}
          {companyData.website && (
            <div className="flex items-center gap-3 text-gray-600">
              <Globe size={20} className="text-blue-500 flex-shrink-0" />
              <Link href={companyData.website} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-blue-600 hover:underline break-all">
                {companyData.website}
              </Link>
            </div>
          )}
          {companyData.contact_phone && (
            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={20} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">{companyData.contact_phone}</span>
            </div>
          )}
          {companyData.contact_email && (
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={20} className="text-blue-500 flex-shrink-0" />
              <a href={`mailto:${companyData.contact_email}`} className="text-sm sm:text-base text-blue-600 hover:underline break-all">
                {companyData.contact_email}
              </a>
            </div>
          )}
        </div>
        <div className="flex  gap-4 mt-6">
          <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50">
            <Facebook size={20} className="text-blue-600" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50">
            <Twitter size={20} className="text-blue-400" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50">
            <Linkedin size={20} className="text-blue-700" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyInfoCard;