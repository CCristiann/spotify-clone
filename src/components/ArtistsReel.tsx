"use client"

import { getArtists } from "@/lib/actions"
import { useQuery } from "@tanstack/react-query"
import ArtistCard, { ArtistCardSkeleton } from "./ArtistCard"

export default function ArtistsReel() {
    const { data: artists, isLoading } = useQuery({
        queryKey: ["get-artists"],
        queryFn: getArtists
    })

    return (
        <div className="grid grid-cols-6 w-full gap-4">
            {isLoading ? (
                <>
                {Array.from({ length: 20 }).map((_, i) => (
                    <ArtistCardSkeleton key={i} />
                ))}
                </>
            ) : (
                <>
                {artists?.map((artists, i) => (
                  <ArtistCard key={i} artist={artists} />
                ))}
                </>
            )}
        </div>
    )
}