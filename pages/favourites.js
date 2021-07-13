import { useEffect, useState } from "react";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const parsed = JSON.parse(localStorage.getItem("favourites") || "[]");
    setFavourites(parsed);
  }, []);
  return (
    <ul>
      {favourites.map((fav) => (
        <li key={fav.id}>{fav.title}</li>
      ))}
    </ul>
  );
}
