import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#F4FAF6] text-gray-600 py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">TalentTrack</h2>
          <p className="text-sm">
            TalentTrack is a market place helping connect clients and job
            seekers to empower the future of work!
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-[#9AD6A0] hover:text-green-600">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-[#9AD6A0] hover:text-green-600">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-[#9AD6A0] hover:text-green-600">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-[#9AD6A0] hover:text-green-600">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-green-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Link Up</h3>
          <p className="text-sm mb-4">
            New product drops, discounts & promotions. Directly to your inbox.
          </p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="rounded-r-none"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-[#22C55E] hover:bg-green-600"
            >
              <Send size={20} />
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © {new Date().getFullYear()} TalentTrack. All rights reserved.
      </div>
    </footer>
  );
}
