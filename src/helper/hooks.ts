import { useRef, useEffect } from 'react';
import { useQuery, QueryClient } from "react-query";
import api from 'api';
import Axios from "axios";
import { PokemonInterface } from 'interfaces';

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};


const fetchPokemonsResults = async ({ queryKey }: { queryKey: any }) => {
  const [limit, offset] = [queryKey[1], queryKey[2]];
  const pokeList = await api.getPokemons(limit, offset);
  return pokeList.results;
}

export const useGetPokemons = (limit: number, offset: number) => {
  return useQuery(
    ['pokemons', limit, offset],
    fetchPokemonsResults,
    { keepPreviousData: true });
};


const fetchPokemon = async ({ queryKey }: { queryKey: any }) => {
  const id = queryKey[1];
  const poke: PokemonInterface = await api.getPokemonById(id);
  return poke;
}

export const useGetPokemon = (id: number) => {
  return useQuery(
    ['pokemon', id],
    fetchPokemon,
    { keepPreviousData: true })
};

export const getPokemonQuery = (queryClient: QueryClient, id: number) => {
  return queryClient.fetchQuery(['pokemon', id], fetchPokemon);
};


const fetchtPokemonSpecies = async ({ queryKey }: { queryKey: any }) => {
  const speciesName = queryKey[1];
  const pokemonSpecies = await api.getPokemonEvolution(speciesName);
  return pokemonSpecies;
}

export const getPokemonSpeciesQuery = (queryClient: QueryClient, speciesName: string) => {
  return queryClient.fetchQuery(['species', speciesName], fetchtPokemonSpecies);
};


const fetchtPokemonEvolution = async ({ queryKey }: { queryKey: any }) => {
  const url = queryKey[1];
  const pokemonEvolution = await Axios.get(url);
  return pokemonEvolution;
}

export const getPokemonEvolutionQuery = (queryClient: QueryClient, url: string) => {
  return queryClient.fetchQuery(['evolution', url], fetchtPokemonEvolution);
}


