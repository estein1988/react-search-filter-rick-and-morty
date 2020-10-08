import React, {Component} from 'react';
import CardsContainer from './compontents/CardsContainer'
import SearchCharacterForm from './compontents/SearchCharacterForm'
import './App.css';

class App extends Component {
  state ={
    allCharacters: [],
    selectedCharacters: [],
    inputValue: ""
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => {
        this.setState({allCharacters: data.results})
        this.setState({selectedCharacters: data.results})
      })
  }

  filterCharacters = ( event ) => {
    const input = event.target.value
    const filteredCharacters = this.state.allCharacters
      .filter(
        character => 
          character.name.toLowerCase().includes(input.toLowerCase())
      )
      this.setState({selectedCharacters: filteredCharacters})
  }

  render() {
    return (
    <div id="app">
      <h1>Rick and Morty App</h1>
      <SearchCharacterForm filterCharacters={this.filterCharacters}/>
      <CardsContainer characters={this.state.selectedCharacters} />
    </div>
  )}
}

export default App;
