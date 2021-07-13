import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../util/requests";

export default function Home({ results }) {
  console.log("results", results);
  const [movies, setMovies] = useState(results);
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
    if (filter === "all") {
      setMovies(results);
    } else {
      const filteredMoviesByYear = results.filter(
        (result) => new Date(result.release_date)?.getFullYear() === value
      );
      setMovies(filteredMoviesByYear);
    }
  };

  const handleFilterByGenre = (genre = "all") => {
    if (genre === "all") {
      setMovies(results);
    } else {
      const filteredMoviesByGenre = results.filter((result) =>
        result.genre_ids?.includes(value)
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
          return new Date(a.release_date) > new Date(b.release_date);
        }
        return a.title?.localeCompare(b.title);
      });
      setMovies(sortedMovies);
    }
  };

  const addToFavourites = (movie) => {
    const favourites = localStorage.getItem("favourites");

    if (favourites == null) {
      localStorage.setItem("favourites", JSON.stringify([movie]));
    } else {
      const parsedFavourites = JSON.parse(favourites);
      const isExisting = parsedFavourites.find(
        (fav) => fav.title === movie.title
      );
      if (!isExisting) {
        parsedFavourites?.push(movie);
        localStorage.setItem("favourites", JSON.stringify(parsedFavourites));
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Stream.it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header handleSearch={handleSearch} />
      <Nav />
      <Results results={movies} addToFavourites={addToFavourites} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

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
