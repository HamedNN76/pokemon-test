import Pokedex from 'pokedex-promise-v2';

export const PokedexApi = new Pokedex();

export type ListEndpointOptions = {
  offset?: number;
  limit?: number;
  cacheLimit?: number;
};
