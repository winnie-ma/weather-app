import { useState } from "react";
const SearchBar = () => {
  return (
    <div className="rounded-md bg-white lg:w-1/2 p-1 flex justify-between text-xl lg:text-sm">
      <input
        type="text"
        placeholder="Search for a city"
        name="city"
        id="city"
        className="placeholder:text-gray-400 pl-1"
      />
      <button className="bg-violet-700 text-white rounded-md px-3 py-1 h-full">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
