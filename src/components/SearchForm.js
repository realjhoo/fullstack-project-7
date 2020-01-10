import React from "react";
import searchIcon from "../search.svg";

const SearchForm = () => (
  <form className="search-form">
    <input type="search" name="search" placeholder="Search" required />
    <button type="submit" className="search-button">
      <img src={searchIcon} alt="Search Icon" />
    </button>
  </form>
);

export default SearchForm;
