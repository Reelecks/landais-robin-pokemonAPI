import React, {useState, useEffect}   from "react";

function PokemonList({ searchTerm = "" }) {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getDataList();
  }, []);
  
  async function getDataList() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await res.json(); 
    console.log("data", data.results);
    setPokemons(await getSprite(data.results)); 
  }
  async function getSprite(pokemons) {
    const pokemonWithSprites = await Promise.all(
      pokemons.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return {
          ...pokemon,
          image: data.sprites.front_default,
        };
      })
    );
    return pokemonWithSprites;
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (

    <ul>
    {filteredPokemons.map((pokemon) => (
      <li key={pokemon.name}>
          <img src={pokemon.image} alt={pokemon.name} />
          {pokemon.name}
        </li>
    ))}
    </ul>
  );
}

export default PokemonList;
