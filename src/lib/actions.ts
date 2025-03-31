"use server"

import { db } from "./db"

export const getSongs = async () => {
    try {
        const songs = await db.song.findMany()
        return songs
    } catch (err) {
        throw new Error((err as any).message || "Something went wrong!")
    }
}

export const getArtists = async () => {
    try {
        const artists = await db.artist.findMany()
        return artists
    } catch (err) {
        throw new Error((err as any).message || "Something went wrong!")
    }
}