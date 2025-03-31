import { Artist, Song } from "@prisma/client"
import Image from "next/image"
import { Skeleton } from "./ui/skeleton"

interface ArtistCardProps {
    artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
    return (
        <div className="w-40 hover:bg-input/50 rounded-lg flex flex-col gap-y-2 p-3">
            <Image 
                alt={artist.image} 
                src={"/marra-1.jpeg"} 
                width={70} 
                height={70} 
                className="size-32 mx-auto rounded-full object-cover"
            />
            <span className="font-medium break-words">{artist.stageName}</span>
        </div>
    )
}

export function ArtistCardSkeleton() {
    return (
        <div className="w-40 bg-input/10 rounded-lg flex flex-col gap-y-2 p-3">
            <Skeleton className="rounded-lg size-28" />
            <Skeleton className="h-5 w-full" />
        </div>
    )
}