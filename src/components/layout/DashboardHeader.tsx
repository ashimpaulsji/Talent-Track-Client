"use client";
import React from 'react'
import { Bell, User, Menu } from 'lucide-react'
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

interface DashboardHeaderProps {
    onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
    return (
        <header className="px-4 sm:px-6 py-4 bg-white dark:bg-gray-800 border-b">
            <div className='flex items-center justify-between container'>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="mr-2 lg:hidden" onClick={onMenuClick}>
                        <Menu className="h-5 w-5" />
                    </Button>
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full sm:w-64 mr-4"
                    />
                </div>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="mr-2">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                                 <User className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">John Doe</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        john.doe@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
