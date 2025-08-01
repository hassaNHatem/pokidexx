import React from "react";
import { usePokemonById } from "../../hooks/usePokemons";

interface Props {
  id: string | number;
}

const PokimonDetails: React.FC<Props> = ({ id }) => {
  const { data, isLoading, isError } = usePokemonById(id);

  if (isLoading) return <div>Loading Pokémon...</div>;
  if (isError) return <div>Error loading Pokémon</div>;

  return (
    <div>
      <h2>{data?.name}</h2>
      <img src={data?.sprites.front_default} alt={data?.name} />
      <p>Height: {data?.height}</p>
      <p>Weight: {data?.weight}</p>
      <p>Types: {data?.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
};

export default PokimonDetails;
