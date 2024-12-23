"use client";

import Link from "next/link";
import { Video, Layout, FileVideo, Share2, Menu } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="space-y-4 pt-4">
        {" "}
        {/* Update 1: Removed py-4 and added pt-4 */}
        <div className="px-3 py-2">
          <Button variant="secondary" className="w-full justify-start">
              <Video className="mr-2 h-4 w-4" />
            <Link href="/dashboard">

              <span
                className={cn(
                  "transition-opacity",
                  isCollapsed && "lg:opacity-0"
                )}
              >
                Create Video
              </span>
            </Link>
          </Button>
        </div>
        <div className="px-3 py-2">
          <nav className="space-y-1">
            {[
              {
                icon: Layout,
                label: "Dashboard",
                href: "/dashboard/generateresult",
              },
              { icon: FileVideo, label: "Videos", href: "#" },
              { icon: Layout, label: "Examples", href: "#" },
              { icon: Share2, label: "Connect Social", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <item.icon className="h-4 w-4" />
                <span
                  className={cn(
                    "transition-opacity",
                    isCollapsed && "lg:opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div
        className={cn(
          "hidden lg:block pb-4 transition-all duration-300 ease-in-out",
          {
            /* Update 2: Changed pb-12 to pb-4 */
          },
          isCollapsed ? "w-16" : "w-64",
          className
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-[-20px] top-4 hidden lg:flex"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        <SidebarContent />
      </div>
    </>
  );
}
