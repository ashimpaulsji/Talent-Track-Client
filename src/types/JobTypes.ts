/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CompanyDetails {
    company_logo: any;
    company_name: string;
    company_website: string;
    company_size: string;
    company_type: string;
    company_industry: string;
    company_address: string;
    comany_cover_image: any;
}

export interface Job {
    id: number;
    employer_id: number;
    title: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    location: string;
    salary_range: string;
    employment_type: string;
    experience_level: string;
    category: string;
    tags: string[];
    company_details: CompanyDetails;
    is_recent: boolean;
    posted_time: string;
    similar_jobs: Job[];
    featured_jobs: Job[];
}
