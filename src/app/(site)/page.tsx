import ArtistsReel from "@/components/ArtistsReel";
import Header from "@/components/Header";
import SongsReel from "@/components/SongsReel";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>Header</Header>
      <div className="space-y-14">
        <div className="flex flex-col gap-y-4 p-4">
          <h2 className="font-bold text-3xl">Songs</h2>
          <SongsReel />
        </div>
        <div className="flex flex-col gap-y-4 p-4">
          <h2 className="font-bold text-3xl">Artists</h2>
          <ArtistsReel />
        </div>
      </div>
    </div>
  );
}
