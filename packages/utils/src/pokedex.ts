import Pokedex from 'pokedex-promise-v2';

export const PokedexApi = new Pokedex();

export type ListEndpointOptions = Parameters<typeof PokedexApi.getPokemonsList>[0];
