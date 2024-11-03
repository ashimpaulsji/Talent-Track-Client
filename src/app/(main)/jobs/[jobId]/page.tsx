'use client';
import { jobs } from '@/src/constants/data/jobdata'
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation'
const JobDetails = dynamic(() => import('@/src/features/Jobs/JobsDetails/JobsDetails'), { ssr: false });

const JobDetailPage = ({ params }: { params: { jobId: string } }) => {
    const jobId = parseInt(params.jobId)
    const job = jobs.find(j => j.id === jobId)

    if (!job) {
        notFound()
    }

    return (
        <section className='container'>
            <JobDetails job={job} />
        </section>
    )
}

export default JobDetailPage