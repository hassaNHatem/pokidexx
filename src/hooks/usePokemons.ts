import { useQuery } from "@tanstack/react-query";
import { fetchPokemonById, fetchPokemonList } from "../actions/pokimon-listing";

export const usePokemonList = (limit = 10, offset = 0) => {
  return useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const usePokemonById = (idOrName: number | string) => {
  return useQuery({
    queryKey: ["pokemon", idOrName],
    queryFn: () => fetchPokemonById(idOrName),
    enabled: !!idOrName, // Don't run if idOrName is undefined
    staleTime: 1000 * 60 * 5,
  });
};
