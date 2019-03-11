import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchChange }) => {
  return (
    <div className= "nes-field search-bar">
      <input
        className="nes-input"
        type="search"
        name="search"
        placeholder='Search pokemon...'
        onChange={searchChange}
        />
    </div>
  );
}

export default SearchBar;