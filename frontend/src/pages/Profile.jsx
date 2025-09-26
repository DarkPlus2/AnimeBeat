import { useEffect, useState } from "react";
import { getWatchlist } from "../services/api";
import AnimeCard from "../components/AnimeCard";

export default function Profile({ userEmail }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (userEmail) {
      getWatchlist(userEmail).then(res => setWatchlist(res.data.watchlist));
    }
  }, [userEmail]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {watchlist.length === 0 ? <p>No anime in watchlist</p> :
          watchlist.map(animeId => <AnimeCard key={animeId} anime={{ mal_id: animeId, images: { jpg: { image_url: `https://cdn.myanimelist.net/images/anime/${animeId}.jpg` } }, title: `Anime ${animeId}` }} />)
        }
      </div>
    </div>
  );
}
