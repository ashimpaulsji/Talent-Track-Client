import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Logo from "../ui/logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-indigo-100 text-gray-700 py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm">
            TalentTrack is a marketplace helping connect clients and job
            seekers to empower the future of work!
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-indigo-500 hover:text-indigo-700">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-indigo-500 hover:text-indigo-700">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-indigo-500 hover:text-indigo-700">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-indigo-500 hover:text-indigo-700">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-800">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-indigo-700">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-700">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-indigo-800">Link Up</h3>
          <p className="text-sm mb-4">
            New product drops, discounts & promotions. Directly to your inbox.
          </p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="rounded-r-none border-indigo-300 focus:border-indigo-500"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
            >
              <Send size={20} />
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-indigo-700">
        © {new Date().getFullYear()} TalentTrack. All rights reserved.
      </div>
    </footer>
  );
}