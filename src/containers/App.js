import React, { Component } from "react";
import Header from "./Header/Header";
import Loading from "../components/Loading/Loading";
import CardList from "../components/CardList/CardList";
import Scroll from "./Scroll/Scroll";
import './App.css';

/**
 * TODO: Add pagination for search results exceeding 'x' number
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://ironhack-pokeapi.herokuapp.com/pokemon")
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon: pokemon }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { pokemon, searchfield } = this.state;
    const searchResults = pokemon.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchfield.toLowerCase()));
    
    // show a loading screen until the data has been fetched and loaded into state
    return !pokemon.length ? (
      <Loading />
    ) : (
      <div className="app-container">
        <div className="flex-container">
          <Header searchChange={this.onSearchChange} />
          <Scroll className="Scroll">
            <CardList pokemon={searchResults} />
          </Scroll>
          <footer className="nes-container is-rounded">
            <label>
              <input type="radio" class="nes-radio" name="answer" checked />
              <span className="footer-text">
                {/* nested span is hacky fix for bad kerning */}
                Ash Ketchum <span><span id="footer-kerning">&copy; </span>1996</span>
              </span>
            </label>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
