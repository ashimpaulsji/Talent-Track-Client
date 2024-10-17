"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { Logo } from "@/src/assets";
import SearchDialog from "./SearchDialog";

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
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#22C55E]">
            <Image
              src={Logo}
              alt="Talent Tracker"
              width={150}
              height={60}
              className="cursor-pointer"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-gray-600 hover:text-[#22C55E]"
              >
                {item.name}
              </Link>
            ))}
            <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
            <Button className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white">
              Sign In
            </Button>
          </nav>

          <div className="flex items-center">
            <div className="px-4 py-2">
              <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4 py-2">
            <Button className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90 text-white">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
