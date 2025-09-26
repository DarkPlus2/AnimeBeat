import { useEffect, useState } from "react";
import { getAnimeList } from "../services/api";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getAnimeList().then(res => setAnimeList(res.data.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Anime</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {animeList.map(anime => <AnimeCard key={anime.mal_id} anime={anime} />)}
      </div>
    </div>
  );
}
