import React from 'react'
import Link from 'next/link'
import { Button } from "@/src/components/ui/button"
import { LayoutDashboard, Users, Briefcase, Calendar, Settings } from 'lucide-react'

export function Sidebar() {
    return (
        <div className="flex flex-col h-screen w-64 bg-white dark:bg-gray-800 border-r">
            <div className="flex items-center justify-center h-16 border-b">
                <span className="text-2xl font-semibold text-gray-800 dark:text-white">JobPortal</span>
            </div>
            <nav className="flex-grow">
                <ul className="space-y-2 py-4">
                    <li>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/dashboard">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Dashboard
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/dashboard/applicants">
                                <Users className="mr-2 h-4 w-4" />
                                Applicants
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/dashboard/jobs">
                                <Briefcase className="mr-2 h-4 w-4" />
                                Jobs
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/dashboard/schedule">
                                <Calendar className="mr-2 h-4 w-4" />
                                Schedule
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/dashboard/settings">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </Link>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}