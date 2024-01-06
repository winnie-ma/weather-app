import { useState, useRef } from "react";
import ErrorModal from "./components/ErrorModal";
const SearchBar = ({ handleCitySearch, onModalConfirmBtnClick, isError }) => {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef();

  const onSearchBtnClick = () => {
    if (searchInput === "") {
      inputRef.current.focus();
      return;
    }
    handleCitySearch(searchInput);
    setSearchInput("");
    inputRef.current.focus();
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onSearchBtnClick();
    }
  };
  return (
    <>
      {isError && (
        <ErrorModal onModalConfirmBtnClick={onModalConfirmBtnClick} />
      )}
      <div className="rounded-md bg-white lg:w-1/2 p-1 flex justify-between text-xl lg:text-sm">
        <input
          ref={inputRef}
          autoFocus
          type="text"
          placeholder="Search for a city"
          name="city"
          id="city"
          className="placeholder:text-gray-400 pl-1 outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={onEnterPress}
        />
        <button
          className="bg-violet-700 text-white rounded-md px-3 py-1 h-full"
          onClick={onSearchBtnClick}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
