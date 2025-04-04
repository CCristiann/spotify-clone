"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: "Home",
            active: pathname !== "/search",
            href: "/"
        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === "/search",
            href: "/search"
        }
    ], [pathname])

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2 sticky top-0 h-screen">
        <Box>
            <div className="flex flex-col gap-y-4 px-5 py-4">
                {routes.map((item, i) => (
                    <SidebarItem key={i} {...item} />
                ))}
            </div>
        </Box>
        <Box className="overflow-y-auto h-full">
            <Library />
        </Box>
      </div>
      <main className="h-full min-h-screen flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
}  