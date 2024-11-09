"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from "@/src/components/ui/button";
import { LayoutDashboard, Users, Briefcase, Calendar, Settings, X } from 'lucide-react';
import Logo from '../ui/logo';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    userRole: string; // Pass user role as a prop
}

const menuItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'user'] },
    { href: '/dashboard/applicants', icon: Users, label: 'Applicants', roles: ['admin'] },
    { href: '/dashboard/jobs', icon: Briefcase, label: 'Jobs', roles: ['admin', 'recruiter'] },
    { href: '/dashboard/schedule', icon: Calendar, label: 'Schedule', roles: ['admin', 'user'] },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings', roles: ['admin', 'user'] },
];

export function Sidebar({ isOpen, onClose, userRole }: SidebarProps) {
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out flex flex-col h-screen w-64 bg-white dark:bg-gray-800 border-r z-30`}>
                <div className="flex items-center justify-between h-16 border-b px-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>
                <nav className="flex-grow">
                    <ul className="space-y-2 py-4">
                        {menuItems
                            .filter(item => item.roles.includes(userRole))
                            .map(item => (
                                <li key={item.href}>
                                    <Button variant="ghost" className="w-full justify-start" asChild>
                                        <Link href={item.href}>
                                            <item.icon className="mr-2 h-4 w-4" />
                                            {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
