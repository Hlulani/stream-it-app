import { useState } from "react";

function SearchDropdown({
  handleSort,
  handleFilterByGenre,
  handleFilterByYear,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    debugger;
    switch (name) {
      case "sort_items":
        handleSort(value);
        break;
      case "genre":
        handleFilterByGenre(value);
        break;
      case "year":
        handleFilterByYear(value);
        break;
      default:
        break;
    }

    setOpen(false);
  };

  return (
    <div className="w-full border-b z-40 relative">
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap content-center mt-4 justify-center">
          <div
            className="mt-1.5 flex-col inline-flex w-32 items-start"
            onClick={handleOpen}
          >
            <p style={{ marginBottom: "14px" }}>Sort Items:</p>
            <select
              style={{ width: "110px", borderRadius: "4px", padding: "10px" }}
              name="sort_items"
              onChange={handleChange}
            >
              <option selected="" value="all">
                All
              </option>
              <option value="year">Year</option>
              <option value="title">Title</option>
              <option value="none">Clear</option>
            </select>
          </div>
          <div className="mt-1.5 flex-col inline-flex w-32 items-start">
            <p style={{ marginBottom: "14px" }}>Genre:</p>
            <select
              style={{ width: "110px", borderRadius: "4px", padding: "10px" }}
              name="genre"
              onChange={handleChange}
            >
              <option value="All">All</option>
              <option value="28">Action</option>
              <option value="12">Comedy</option>
              <option value="27">Horror</option>
              <option value="10749">Romance</option>
              <option value="9648">Mystery</option>
              <option value="37">Western</option>
              <option value="16">Animation</option>
              <option value="10770">TV Movie</option>
            </select>
          </div>
          <div className="mt-1.5 flex-col inline-flex w-32 items-start">
            <p style={{ marginBottom: "14px" }}>Year:</p>
            <select
              style={{ width: "110px", borderRadius: "4px", padding: "10px" }}
              name="year"
              onChange={handleChange}
            >
              <option selected="" value="All">
                All
              </option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchDropdown;
