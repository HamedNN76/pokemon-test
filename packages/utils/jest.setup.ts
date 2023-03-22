jest.mock(
  'pokedex-promise-v2',
  () =>
    class {
      async getPokemonsList(interval, callback) {}
      async getPokemonByName(interval, callback) {}
    },
);
