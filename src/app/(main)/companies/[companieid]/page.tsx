'use client'
import { companies } from '@/src/constants/data/companyData';
import CompanyDetails from '@/src/features/Companies/CompaniesDetails/CompaniesDetails';
import { useParams } from 'next/navigation'
import React from 'react'

const CompaniesPageDetails = () => {
    const params = useParams()
    const companyId = Number(params.companieid);

    const companyData = companies.find(company => company.id === companyId);

    return (
        <section className='container'>
            {companyData ? (
                <CompanyDetails companyData={companyData} />
            ) : (
                <p>Company not found.</p>
            )}
        </section>
    )
}

export default CompaniesPageDetails;
