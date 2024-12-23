"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import { Generation, JobStatus } from "@/lib/schema"


export function VideoCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const searchParams = useSearchParams()
  const formData = Object.fromEntries(searchParams.entries())


  return (
    <Card className="overflow-hidden w-full">
      <div className="relative pb-[177.78%]">
        {/* 9:16 aspect ratio */}
        <div className="absolute inset-0">
          <Image
            src={"/car.png"}
            alt={""}
            width={100}
            height={100}
            className=" w-full h-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute inset-0 w-full h-full bg-black/30 hover:bg-black/40 text-white"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-12 w-12" />
            ) : (
              <Play className="h-12 w-12" />
            )}
          </Button>
        </div>
      </div>
      <CardContent className="p-2 ">
        <p className="text-xs text-muted-foreground mb-2">12/18/2024</p>
        <div className="space-y-1 flex  text-xs">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="mt-1 text-sm text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CardContent>
    </Card>
  );
}
