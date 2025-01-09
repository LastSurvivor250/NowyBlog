"use client";

const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="ml-2 px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
      >
        Go
      </button>
    </form>
  );
};

export default SearchBar;
