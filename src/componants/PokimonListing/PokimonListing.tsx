import React, { useState } from "react";
import "./PokimonListing.css";
import PokimonListingHeader from "./PokimonListingHeader";
import { DISPLAY_TYPE } from "../../constants/pokemon-listing";
import PaginatedView from "./PaginatedView";
import PokemonInfiniteScroll from "./PokemonInfiniteScroll";

const PokimonListing: React.FC = () => {
  const [displayType, setDisplayType] = useState(DISPLAY_TYPE.PAGINATION);

  return (
    // <ul>
    //   {data?.results.map((pokemon) => (
    //     <li key={pokemon.name}>{pokemon.name}</li>
    //   ))}
    // </ul>
    <div
      className="pokemon-listing__wrapper"
      style={
        displayType === DISPLAY_TYPE.PAGINATION
          ? styles.paginationBackground
          : styles.infiniteScrollBackground
      }
    >
      <PokimonListingHeader
        displayType={displayType}
        setDisplayType={setDisplayType}
      />

      {displayType === DISPLAY_TYPE.PAGINATION ? (
        <PaginatedView />
      ) : (
        <PokemonInfiniteScroll />
      )}
    </div>
  );
};

const styles = {
  paginationBackground: {
    backgroundColor: "rgb(228, 237, 248)",
  },
  infiniteScrollBackground: {
    backgroundColor: "rgba(228, 248, 239, 1)",
  },
};

export default PokimonListing;
