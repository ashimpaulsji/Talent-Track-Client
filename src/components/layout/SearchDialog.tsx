"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Search, X, Clock } from "lucide-react";

interface SearchDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
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
          <Search className="h-5 w-5 text-gray-600" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-full w-full h-full sm:h-[80vh] sm:max-h-[600px] sm:w-[90vw] sm:max-w-[800px] top-0 sm:top-[10vh] translate-y-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
        <div className="flex flex-col h-full">
          <div className="p-6 mt-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="pl-12 pr-12 py-3 text-lg rounded-full bg-gray-100 dark:bg-gray-800 focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 transition-all border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                autoFocus
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={clearSearch}
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Recent Searches</h3>
            <ul className="space-y-3">
              {["Software Engineer", "Data Analyst", "Product Manager"].map((item, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                    onClick={() => setSearchQuery(item)}
                  >
                    <Clock className="h-4 w-4 mr-3" /> {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <Button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;