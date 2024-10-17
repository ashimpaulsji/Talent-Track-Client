"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Search, X } from "lucide-react";

interface SearchDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-full w-full h-full sm:h-[80vh] sm:max-h-[600px] sm:w-[90vw] sm:max-w-[800px] top-0 sm:top-[10vh] translate-y-0">
        <div className="flex flex-col h-full mt-4">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="pl-10 pr-10 py-2 text-lg rounded-full focus-visible:ring-[#22C55E] transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                autoFocus
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={clearSearch}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            <p className="text-gray-500 mb-2">Recent Searches:</p>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setSearchQuery("Software Engineer")}
                >
                  <Search className="h-4 w-4 mr-2" /> Software Engineer
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setSearchQuery("Data Analyst")}
                >
                  <Search className="h-4 w-4 mr-2" /> Data Analyst
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setSearchQuery("Product Manager")}
                >
                  <Search className="h-4 w-4 mr-2" /> Product Manager
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;