import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} className="pokemon-image"/>
      <h2 className="pokemon-name">{pokemon.name}</h2>
    </div>
  );
}

export default PokemonCard;
