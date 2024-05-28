

function SearchBar({searchTerm, handleSearch}) {
  return (
    <div className="d-flex justify-content-center mt-3">
    <input
      type="text"
      placeholder="Search for a beer..."
      value={searchTerm}
      onChange={handleSearch}
      className="px-5 py-2"
    />
  </div>
  )
}

export default SearchBar
