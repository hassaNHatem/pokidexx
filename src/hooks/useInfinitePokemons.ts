import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const LIMIT = 20;

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export const useInfinitePokemons = () =>
  useInfiniteQuery<PokemonsResponse, Error>({
    queryKey: ["pokemons"],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=${LIMIT}`
      );
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.length * LIMIT;
      return lastPage.next ? totalFetched : undefined;
    },
  });
