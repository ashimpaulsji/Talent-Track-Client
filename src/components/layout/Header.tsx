"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronRight, User } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Logo from "@/src/components/ui/logo";
import SearchDialog from "./SearchDialog";
import { useAuth } from "@/src/redux/hooks/useAuth";

interface MenuItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const router = useRouter();
  const { isLogin, logout, loginUser } = useAuth();
  const user = loginUser;
 

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
  ];

  const handleLoginPage = () => {
    router.push("/login");
  };

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <User size={20} className="text-gray-600" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mr-6 mt-4" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.first_name} {user?.last_name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer my-2"
          onClick={() => router.push("/dashboard/profile")}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-lg text-gray-600 hover:text-blue-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
            </nav>

            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Search size={20} className="text-gray-600" />
            </Button>

            {isLogin ? (
              <UserMenu />
            ) : (
              <Button
                onClick={handleLoginPage}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 transform hover:scale-105 text-lg py-6 px-8 rounded-full shadow-md hover:shadow-lg"
              >
                Sign In
              </Button>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              <Search size={20} className="text-gray-600" />
            </Button>
            {isLogin ? (
              <UserMenu />
            ) : (
              <Button
                onClick={handleLoginPage}
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-[99999] md:hidden  "
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Logo />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <X size={28} />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100">
                <nav className="flex-grow py-8 px-6 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        className="flex items-center justify-between py-3 text-xl text-gray-800 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        <ChevronRight size={20} className="text-gray-400" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </header>
  );
};

export default Header;
