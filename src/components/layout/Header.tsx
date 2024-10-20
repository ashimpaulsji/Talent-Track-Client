"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import SearchDialog from "./SearchDialog";
import { Menu, X } from "lucide-react";
import Logo from "../ui/logo";

interface MenuItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Company", path: "/companies" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            {/* <Image
              src={Logo}
              alt="Talent Tracker"
              width={120}
              height={40}
              className="cursor-pointer"
            /> */}
            <Logo /> 
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              Sign In
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            Sign In
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;