import PokeAPI from 'pokedex-promise-v2';

export type TGetPokemonByNameRes = PokeAPI.Pokemon;

export type TGetPokemonByNameForm = {
  name: string;
};

export type TTGetPokemonByNameAction = {
  type: string;
  payload: TGetPokemonByNameForm;
};
