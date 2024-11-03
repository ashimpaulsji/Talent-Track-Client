'use client';
import React, { useState, useEffect } from 'react';
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/src/components/ui/pagination";
import { Search, MapPin, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { companies } from '@/src/constants/data/companyData';

const Companies: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [industry, setIndustry] = useState<string>('all');
    const [filteredCompanies, setFilteredCompanies] = useState<typeof companies>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const companiesPerPage: number = 9;

    useEffect(() => {
        const filtered = companies.filter(company =>
            company.company_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (industry === 'all' || company.industry === industry)
        );
        setFilteredCompanies(filtered);
        setCurrentPage(1); // Reset to first page on new filter
    }, [searchTerm, industry]);

    const indexOfLastCompany: number = currentPage * companiesPerPage;
    const indexOfFirstCompany: number = indexOfLastCompany - companiesPerPage;
    const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);
    const totalPages: number = Math.ceil(filteredCompanies.length / companiesPerPage);

    return (
        <section className='container mx-auto px-4 py-8'>
            <h1 className="text-3xl font-bold text-blue-800 mb-8">Companies</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                    <Input
                        type="text"
                        placeholder="Search companies..."
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <Select value={industry} onValueChange={(value: string) => setIndustry(value)}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Industries</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Energy">Energy</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCompanies.map(company => (
                    <Card key={company.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Image
                                src={company.logo || '/default-logo.png'}
                                alt={company.company_name || 'Company Logo'}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <CardTitle className="text-xl font-semibold text-blue-700">{company.company_name || 'Unknown Company'}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                                <MapPin size={16} />
                                <span>{company.location || 'Location not specified'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                                <Users size={16} />
                                <span>{company.employees || 'N/A'} employees</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Briefcase size={16} />
                                <span>{company.industry || 'Industry not specified'}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                <Link href={`/companies/${company.id}`}>View Company</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === index + 1}
                                    onClick={() => paginate(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </section>
    );
}

export default Companies;