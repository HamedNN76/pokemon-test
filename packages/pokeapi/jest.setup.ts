jest.mock(
  'pokedex-promise-v2',
  () =>
    class {
      getPokemonsList(interval, callback) {}
    },
);
