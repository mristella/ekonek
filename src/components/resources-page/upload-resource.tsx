"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function UploadResource() {
  return (
    <div className="my-10 text-center">
      <Button className="bg-orange-500 text-white hover:bg-orange-600">
        <Upload className="w-5 h-5 mr-2" />
        Share Your Resource
      </Button>
    </div>
  );
}
