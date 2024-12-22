"use client";

import { VideoCard } from "@/components/video-card";

// Mock data for demonstration

export function GenerateVideo3() {

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Generate</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Show the current generation first if we have form data */}

          <div className="w-full max-w-[400px] mx-auto">
            <VideoCard />
          </div>

      </div>
    </div>
  );
}
