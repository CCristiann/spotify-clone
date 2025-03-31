import { Song } from "@prisma/client"
import Image from "next/image"
import { Skeleton } from "./ui/skeleton"

interface SongCardProps {
    song: Song
}

export default function SongCard({ song }: SongCardProps) {
    return (
        <div className="w-40 hover:bg-input/50 rounded-lg flex flex-col gap-y-2 p-3">
            <Image 
                alt={song.name} 
                src={"/marra.jpeg"} 
                width={70} 
                height={70} 
                className="h-32 w-full aspect-square rounded-lg object-cover"
            />
            <span className="font-medium break-words">{song.name}</span>
        </div>
    )
}

export function SongCardSkeleton() {
    return (
        <div className="w-40 bg-input/10 rounded-lg flex flex-col gap-y-2 p-3">
            <Skeleton className="rounded-lg size-28" />
            <Skeleton className="h-5 w-full" />
        </div>
    )
}