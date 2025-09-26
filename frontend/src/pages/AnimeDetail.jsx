import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeDetail } from "../services/api";

export default function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    getAnimeDetail(id).then(res => setAnime(res.data.data));
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full md:w-1/3 rounded" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
          <p className="mb-2"><strong>Episodes:</strong> {anime.episodes}</p>
          <p className="mb-2"><strong>Score:</strong> {anime.score}</p>
          <p className="mb-2"><strong>Synopsis:</strong> {anime.synopsis}</p>
        </div>
      </div>
    </div>
  );
}
