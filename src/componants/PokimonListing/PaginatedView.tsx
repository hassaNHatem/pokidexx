import React, { useState } from "react";
import { usePokemonList } from "../../hooks/usePokemons";
import PokimonCard from "./PokimonCard";
import Pagination from "../Pagination/Pagination";

const PAGE_SIZE = 20;

const PaginatedView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * PAGE_SIZE;
  const { data, isLoading } = usePokemonList(PAGE_SIZE, offset);

  const renderPokimonCards = () => {
    return (
      <div className="pokemon-listing__grid">
        {data?.results.map((el) => {
          const id = el?.url?.split("/").filter(Boolean).pop();

          return <PokimonCard name={el.name} id={id} />;
        })}
      </div>
    );
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div style={{ padding: "24px" }}>
      {renderPokimonCards()}

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <Pagination
          totalPages={Math.ceil((data?.count || 0) / PAGE_SIZE)}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
        <div style={{ marginTop: 8 }}>
          Page {currentPage} of {Math.ceil((data?.count || 0) / PAGE_SIZE)} (
          {PAGE_SIZE} Pokémon shown)
        </div>
      </div>
    </div>
  );
};

export default PaginatedView;
