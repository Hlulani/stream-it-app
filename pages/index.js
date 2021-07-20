import Head from "next/head";
import { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../util/requests";
//import * as movieActions from "../redux/actions/movie";

export default function Home({ results }) {
  const [movies, setMovies] = useState(results);

  useEffect(() => {
    const request = fetch(
      `https://api.themoviedb.org/3${
        requests.fetchTrending.url|| requests[genre]?.url 
      }`, {
        mode: 'no-cors'
      }
    ); 
    debugger;
    request.then(r => {
      const d = r.json();
      d.then(p =>{
        debugger;
        console.log(p);
      }).catch(e => {
        debugger;
        console.log(e)
      })
    })    
}, []);

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
    if (filter === "all") {
      setMovies(results);
    } else {
      const filteredMoviesByYear = results.filter(
        (result) => new Date(result.release_date)?.getFullYear() === +filter
      );
      setMovies(filteredMoviesByYear);
    }
  };

  const handleFilterByGenre = (genre = "all") => {
    if (genre === "all") {
      setMovies(results);
    } else {
      const filteredMoviesByGenre = results.filter((result) =>
        result.genre_ids?.includes(genre)
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

      <Header
        handleSearch={handleSearch}
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