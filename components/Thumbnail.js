import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

function Thumbnail({ movie, addToFavourites }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [onFavTab, setonFavTab] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setonFavTab(searchParams.get("genre") === "fetchFavourites");
  }, []);

  const [favourite, setFavourite] = useState(false);

  const favouriteHandler = () => {
    if (favourite) {
      return;
    }
    addToFavourites(movie)
      .then((data) => {
        setFavourite(true);
      })
      .catch((data) => {
        setFavourite(false);
      });
  };
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        alt=""
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        width={800}
        height={500}
      />

      <div className="p-2">
        <p className="truncate max-w-md" title={movie.overview}>
          {" "}
          {movie.overview}
        </p>

        <h2
          className="mt-1 text-2xl text-white 
             transition-all duration-100 ease-in-out group-hover:font-bold"
        >
          {movie.title || movie.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type}.`}
          {""}
          {movie.release_date || movie.first_air_date}.{""}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
          {!onFavTab && (
            <button
              onClick={favouriteHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full px-10"
            >
              {favourite ? "Added" : "Add Favorite"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
