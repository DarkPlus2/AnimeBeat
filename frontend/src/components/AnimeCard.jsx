import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <div className="bg-gray-800 text-white rounded shadow overflow-hidden">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <div className="p-2">
        <h2 className="font-bold">{anime.title}</h2>
        <Link to={`/anime/${anime.mal_id}`} className="text-blue-400 mt-1 block">Details</Link>
      </div>
    </div>
  );
}
