function FilterByGenre({ handleFilterByGenre }) {
  const handleChange = (ev) => {
    const { value } = ev.target;
    if (value === "") {
      return handleFilterByGenre("all");
    }
    handleFilterByGenre(value);
  };

  return (
    <input
      type="text"
      className="p-2 pl-8 ml-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
      placeholder="Filter by genre.."
      onChange={handleChange}
    />
  );
}

export default FilterByGenre;
