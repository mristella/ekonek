"use client";

import { Button } from "@/components/ui/button";

const fileTypes = ["PDF", "Word", "PowerPoint", "Video", "Infographic"];

export default function FileTypeFilter() {
  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {fileTypes.map((type) => (
        <Button
          key={type}
          variant="outline"
          className="hover:bg-orange-50"
        >
          {type}
        </Button>
      ))}
    </div>
  );
}
