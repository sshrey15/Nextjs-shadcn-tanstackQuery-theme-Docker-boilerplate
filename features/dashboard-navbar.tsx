"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { IoDiamondOutline } from "react-icons/io5";

export default function DashboardNavbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const getBreadcrumb = () => {
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "Dashboard";

    return lastSegment
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="w-full h-14 font-sans bg-white dark:bg-[#0A0F13] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-3 sm:px-6">
        <div className="flex w-2xl border border-gray-300 dark:border-gray-700 rounded-full items-center gap-2 sm:gap-3 shrink-0">
                <Input className="rounded-full" placeholder="Search..." />
        </div>
      
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-[#0A0F13] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
          <span>
            <IoDiamondOutline className="inline-block mr-2 text-gray-600 dark:text-gray-200" />
          </span>
          Starter Pack
        </button>

        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer shrink-0"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
            <MdOutlineWbSunny className="text-gray-600 dark:text-gray-200" />
          ) : (
            <FaRegMoon className="text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}
