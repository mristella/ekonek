"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mb-8 flex items-center w-full max-w-xl mx-auto">
      <div className="relative w-full">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search activities, guides, or toolkits…"
          className="pl-10 w-full border-gray-300 focus:ring-orange-500"
        />
      </div>
    </div>
  );
}
