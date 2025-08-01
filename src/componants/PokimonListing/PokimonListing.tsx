import React from "react";
import { usePokemonList } from "../../hooks/usePokemons";
import "./PokimonListing.css";

const PokimonListing: React.FC = () => {
  const { data, isLoading, isError } = usePokemonList(10, 0);

  if (isLoading) return <div>Loading Pokémons...</div>;
  if (isError) return <div>Error loading Pokémons</div>;

  return (
    // <ul>
    //   {data?.results.map((pokemon) => (
    //     <li key={pokemon.name}>{pokemon.name}</li>
    //   ))}
    // </ul>
    <div className="pokemon-listing__wrapper"></div>
  );
};

export default PokimonListing;
