import Head from "next/head";
import { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import SearchDropdown from "../components/SearchDropdown";
import requests from "../util/requests";
//import * as movieActions from "../redux/actions/movie";

export default function Home({ results }) {
  const [movies, setMovies] = useState(results);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("genre") === "fetchFavourites") {
      const parsed = JSON.parse(localStorage.getItem("favourites") || "[]");
      setMovies(parsed);
    } else {
      setMovies(results);
    }
  }, [results]);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(movieActions.setMovies(results));

  //     console.log("useEffect has been called!", movies);
  // }, []);

  const handleSearch = (event) => {
    const { value } = event.target;

    if (!value) {
      setMovies(results);
    } else {
      const filteredMovies = results.filter((result) =>
        result.title?.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(filteredMovies);
    }
  };

  const handleFilterByYear = (filter = "all") => {
    if (filter === "All") {
      setMovies(results);
    } else {
      const filteredMoviesByYear = results.filter(
        (result) => new Date(result.release_date)?.getFullYear() === +filter
      );
      setMovies(filteredMoviesByYear);
    }
  };

  const handleFilterByGenre = (genre = "all") => {
    debugger;
    if (genre === "All") {
      setMovies(results);
    } else {
      const filteredMoviesByGenre = results.filter((result) =>
        result.genre_ids?.includes(+genre)
      );
      setMovies(filteredMoviesByGenre);
    }
  };

  const handleSort = (sortBy = "none") => {
    if (sortBy === "none") {
      setMovies(results);
    } else {
      const sortedMovies = [...results].sort((a, b) => {
        if (sortBy === "year") {
          if (new Date(a.release_date) > new Date(b.release_date)) {
            return 1;
          } else if (new Date(a.release_date) < new Date(b.release_date)) {
            return -1;
          }
          return 0;
        } else if (sortBy === "title") {
          if (a.original_title > b.original_title) {
            return 1;
          } else if (a.original_title < b.original_title) {
            return -1;
          }
          return 0;
        }
      });
      debugger;
      setMovies(sortedMovies);
    }
  };

  const addToFavourites = (movie) => {
    const addTofavouritePromise = new Promise((resolve, reject) => {
      const favourites = localStorage.getItem("favourites");

      if (favourites == null) {
        localStorage.setItem("favourites", JSON.stringify([movie]));
        resolve("success");
        return;
      } else {
        const parsedFavourites = JSON.parse(favourites);
        const isExisting = parsedFavourites.find(
          (fav) => fav.title === movie.title
        );
        if (!isExisting) {
          parsedFavourites?.push(movie);
          localStorage.setItem("favourites", JSON.stringify(parsedFavourites));
          resolve("success");
          return;
        } else {
          resolve("success");
          return;
        }
        reject("failed");
      }
    });

    return addTofavouritePromise;
  };

  return (
    <div>
      <Head>
        <title>Stream.it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        handleSearch={handleSearch}
        handleFilterByYear={handleFilterByYear}
        handleFilterByGenre={handleFilterByGenre}
      />

      <SearchDropdown
        handleSort={handleSort}
        handleFilterByYear={handleFilterByYear}
        handleFilterByGenre={handleFilterByGenre}
      />

      <Nav />
      <Results results={movies} addToFavourites={addToFavourites} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log("GET SSP", genre);
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
