import { useState } from "react";

function SortItems({ sortBy }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (e, order) => {
    e.preventDefault();
    sortBy(order);
    setOpen(false);
  };

  return (
    <div className="relative mb-6">
      <button
        onClick={handleOpen}
        className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        <span>Sort Movies</span>
        <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      {open && (
        <div className="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
          <a
            onClick={(e) => handleClick(e, "year")}
            className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white"
            href="#"
          >
            Year
          </a>
          <a
            onClick={(e) => handleClick(e, "none")}
            className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white"
            href="#"
          >
            Clear
          </a>
          <a
            onClick={(e) => handleClick(e, "title")}
            className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white"
            href="#"
          >
            Title
          </a>
        </div>
      )}
    </div>
  );
}

export default SortItems;
