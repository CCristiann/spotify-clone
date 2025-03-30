"use client"

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}
export default function Header({ children, className }: HeaderProps) {
    const router = useRouter()

    return (
        <div className={cn("bg-gradient-to-b from-emerald-800 p-6", className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <Button size={"icon"} className="rounded-full" variant={"secondary"} onClick={() => router.back()}>
                        <ChevronLeft />
                    </Button>
                    <Button size={"icon"} className="rounded-full" variant={"secondary"} onClick={() => router.forward()}>
                        <ChevronRight />
                    </Button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <Button size={"icon"} className="rounded-full">
                        <HiHome />
                    </Button>
                    <Button size={"icon"} className="rounded-full">
                        <BiSearch />
                    </Button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                    <div>
                        <Button className="rounded-full" variant={"ghost"}>
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button className="rounded-full">
                            Log in
                        </Button>
                    </div>
                    </>
                </div>
            </div>
        </div>
    )
}