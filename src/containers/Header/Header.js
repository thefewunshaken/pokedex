import React from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import './Header.css';

const Header = ({ searchChange }) => {
	return (
    <header>
      <div>
        <i className="nes-pokeball is-small"></i>
        <h1>Pokedex</h1>
      </div>
      <SearchBar searchChange={searchChange} />
    </header>
	);
}

export default Header;
