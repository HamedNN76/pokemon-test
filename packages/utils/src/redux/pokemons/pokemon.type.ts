import PokeAPI from 'pokedex-promise-v2';
import {ListEndpointOptions} from '../../pokedex';

export type TGetPokemonsListRes = PokeAPI.NamedAPIResourceList;

export type TGetPokemonsListAction = {
  type: string;
  payload: ListEndpointOptions;
};

export type TGetPokemonByNameRes = PokeAPI.Pokemon;

export type TGetPokemonByNameForm = {
  name: string;
};

export type TTGetPokemonByNameAction = {
  type: string;
  payload: TGetPokemonByNameForm;
};
