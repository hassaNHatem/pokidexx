import React, { useState } from "react";
import { usePokemonList } from "../../hooks/usePokemons";
import { ReactComponent as PokemonLogo } from "../../assets/pokemonlogo.svg";
import "./PokimonListing.css";
import PokimonListingHeader from "./PokimonListingHeader";
import { DISPLAY_TYPE } from "../../constants/pokemon-listing";

const PokimonListing: React.FC = () => {
  const [displayType, setDisplayType] = useState(DISPLAY_TYPE.PAGINATION);
  const { data, isLoading, isError } = usePokemonList(10, 0);

  if (isLoading) return <div>Loading Pokémons...</div>;
  if (isError) return <div>Error loading Pokémons</div>;

  return (
    // <ul>
    //   {data?.results.map((pokemon) => (
    //     <li key={pokemon.name}>{pokemon.name}</li>
    //   ))}
    // </ul>
    <div className="pokemon-listing__wrapper">
      <PokimonListingHeader
        displayType={displayType}
        setDisplayType={setDisplayType}
      />
    </div>
  );
};

export default PokimonListing;
