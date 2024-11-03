export interface OpenJob {
    id: number;
    title: string;
    description: string;
    location: string;
    employment_type: string;
    experience_level: string;
    salary_range: string;
    job_type: string;
    category: string;
};

export interface CompanyType {
    id: number;
    user_id: number;
    company_name: string;
    company_description: string;
    industry: string;
    website: string;
    location: string;
    contact_email: string;
    contact_phone: string;
    logo: string;
    employees: string;
    company_size: string;
    company_type: string;
    company_address: string;
    cover_image: string;
    open_jobs: OpenJob[];
    mission: string;
    culture: string;
    benefits: string[];
};
