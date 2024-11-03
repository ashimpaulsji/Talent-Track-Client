'use client'
import dynamic from 'next/dynamic';
import React from 'react'
const Jobs = dynamic(() => import('@/src/features/Jobs/Jobs'), { ssr: false });

const JobPage = () => {
    return (
        <section className=' bg-gradient-to-b from-white to-gray-100'>
            <div className='container py-4'>
                <Jobs />
            </div>
        </section>
    )
}

export default JobPage