import Header from '@/src/components/layout/Header';
import React from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="auth-layout">
            <Header />
            <section className='bg-gradient-to-br from-blue-100 via-white to-purple-100'>{children}</section>
        </main>
    );
}