import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import styled from 'styled-components';
import './App.css';

const Heading = styled.h1`
  font-family: "pokemon-font", monospace;
  font-size: 42px;
`

const PkmContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

`

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokemon: [],
      searchInput: ""
    }
    console.log("[App.js] Logged in constructor()");
  }

  componentDidMount(){
    console.log("[App.js] Logged in componentDidMount()");
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(res => res.json())
    .then(
      data => {
        this.setState({
          pokemon: data.results
        })
      }
    )
  }

  searchInputHandler = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render(){
    console.log("[App.js] Logged in render()");

    let filteredPokemon = this.state.pokemon.filter(element => {
      return element.name.includes(this.state.searchInput.toLowerCase())
    })

    console.log(filteredPokemon)

    return (
      <div className="App">
        <Heading>Kanto Pokedex</Heading>

        <input
          placeholder="Name"
          onChange={this.searchInputHandler}
        />

        <PkmContainer>

          {filteredPokemon.length > 0 ?  
            filteredPokemon.map(element => {
              let pkmId = this.state.pokemon.indexOf(element) + 1;
              return(
                <Pokemon 
                  name={element.name}
                  id={pkmId}
                  key={pkmId}/>
              )
            })
            :
            <p>No Results :(</p>
          }
        </PkmContainer>
        
      </div>
    )
  }
}

export default App;

