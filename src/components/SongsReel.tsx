"use client"

import { getSongs } from "@/lib/actions"
import { useQuery } from "@tanstack/react-query"
import SongCard, { SongCardSkeleton } from "./SongCard"

export default function SongsReel() {
    const { data: songs, isLoading } = useQuery({
        queryKey: ["get-songs"],
        queryFn: getSongs
    })

    return (
        <div className="grid grid-cols-6 w-full gap-4">
            {isLoading ? (
                <>
                {Array.from({ length: 20 }).map((_, i) => (
                    <SongCardSkeleton key={i} />
                ))}
                </>
            ) : (
                <>
                {songs?.map((song, i) => (
                    <SongCard key={i} song={song} />
                ))}
                </>
            )}
        </div>
    )
}