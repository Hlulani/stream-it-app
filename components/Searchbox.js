function Searchbox({ placeholder, onChange }) {
  return (
    <div className="inline-flex flex-col justify-center relative text-gray-500">
      <div className="relative">
        <input
          type="text"
          className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          placeholder="search..."
          onChange={onChange}
        />
        <svg
          className="w-4 h-4 absolute left-2.5 top-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Searchbox;
