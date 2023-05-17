import React, {useState, useEffect}   from "react";

function PokemonList({ searchTerm = "" }) {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  async function getData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await res.json(); 
    console.log("data", data.results);
    setPokemons(data.results); 
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (

    <ul>
    {filteredPokemons.map((pokemon) => (
      <li key={pokemon.name}>{pokemon.name}</li>
    ))}
    </ul>
  );
}

export default PokemonList;
