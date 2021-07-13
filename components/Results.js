import Thumbnail from "./Thumbnail";

function Results({ results = [], addToFavourites }) {
  console.log("results in Results comp", results);
  return (
    <div className="px-5 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex  flex-wrap justify-center">
      {results.map((movie) => (
        <Thumbnail
          key={movie.id}
          movie={movie}
          addToFavourites={addToFavourites}
        />
      ))}
    </div>
  );
}

export default Results;
