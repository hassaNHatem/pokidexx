import axios from "axios";

export const API_BASE = "https://pokeapi.co/api/v2";

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface AbilityInfo {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface StatsInfo {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  abilities: AbilityInfo[];
  stats: StatsInfo[];
  base_experience: number;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  // Add more fields as needed
}

// Fetch list of Pokémon with pagination
export const fetchPokemonList = async (
  limit = 10,
  offset = 0
): Promise<PokemonListResponse> => {
  const response = await axios.get(
    `${API_BASE}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

// Fetch a specific Pokémon by ID or name
export const fetchPokemonById = async (
  idOrName: number | string
): Promise<PokemonDetails> => {
  const response = await axios.get(`${API_BASE}/pokemon/${idOrName}`);
  return response.data;
};
