import React, { useState } from "react";
import "./PokimonListing.css";
import PokimonListingHeader from "./PokimonListingHeader";
import { DISPLAY_TYPE } from "../../constants/pokemon-listing";
import PaginatedView from "./PaginatedView";

const PokimonListing: React.FC = () => {
  const [displayType, setDisplayType] = useState(DISPLAY_TYPE.PAGINATION);

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

      <PaginatedView />
    </div>
  );
};

export default PokimonListing;
