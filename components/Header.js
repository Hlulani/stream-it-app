import { HomeIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logo from "../img/1.jpg";
import FilterByGenre from "./FilterByGenre";
import FilterByYear from "./FilterByYear";
import HeaderItems from "./HeaderItems";
import Searchbox from "./Searchbox";
import SortItems from "./SortItems";

export default function Header({
  handleSearch,
  handleSort,
  handleFilterByYear,
  handleFilterByGenre,
}) {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <Searchbox placeholder="SEARCH" onChange={handleSearch} />
        <SortItems sortBy={handleSort} />
        <FilterByYear handleFilterByYear={handleFilterByYear} />
        <FilterByGenre handleFilterByGenre={handleFilterByGenre} />
      </div>

      <Image
        className="object-contain"
        src={logo}
        width={200}
        height={50}
        alt=""
      />
    </header>
  );
}
