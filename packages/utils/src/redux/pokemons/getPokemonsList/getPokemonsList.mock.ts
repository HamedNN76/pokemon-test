import {TGetPokemonsListRes} from '../pokemon.type';

export const pokemonMockPageOne: TGetPokemonsListRes = {
  count: 5,
  next: 'https://pokeapi.co/api/v2?offset=2&limit=2',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
};

export const pokemonMockPageTwo: TGetPokemonsListRes = {
  count: 5,
  next: 'https://pokeapi.co/api/v2?offset=4&limit=2',
  previous: 'https://pokeapi.co/api/v2?offset=0&limit=2',
  results: [
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/4/',
    },
  ],
};

export const pokemonMockPageThree: TGetPokemonsListRes = {
  count: 5,
  next: null,
  previous: 'https://pokeapi.co/api/v2?offset=2&limit=2',
  results: [
    {
      name: 'vileplume',
      url: 'https://pokeapi.co/api/v2/3/',
    },
  ],
};
