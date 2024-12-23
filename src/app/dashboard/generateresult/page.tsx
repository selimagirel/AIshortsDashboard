import { Sidebar } from "@/components/sidebar";
import { GenerateVideo3 } from "@/components/generate-video-card";
import { Suspense } from "react";

export default function GenerateResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <div className="px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <GenerateVideo3 />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
