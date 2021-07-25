import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    const [pokemons, setPokemons] = useState([]);

    const fetchPokemon = () => {
      // fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
      //       .then(response => response.json())
      //       .then(response => setPokemons(response.results))
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            
            .then(response=>setPokemons(response.data.results)) 
      }
    return (
      <>
        <button onClick={fetchPokemon}>Fetch Pokemon </button>
        <ul>{pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
        </ul>
      </>
    );
}

export default App;
