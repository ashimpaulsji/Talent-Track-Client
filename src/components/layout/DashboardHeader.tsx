import React from 'react'
import { Bell } from 'lucide-react'
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

export function DashboardHeader() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b">
            <div className="flex items-center">
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 mr-4"
                />
            </div>
            <div className="flex items-center">
                <Button variant="ghost" size="icon" className="mr-2">
                    <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="/placeholder.svg?height=32&width=32"
                                alt="User avatar"
                            />
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
        </header>
    )
}