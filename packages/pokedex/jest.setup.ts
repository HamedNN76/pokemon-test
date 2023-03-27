import '@testing-library/jest-dom/extend-expect';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({children}: {children: any}) => {
      return children;
    },
  };
});

jest.mock(
  'pokedex-promise-v2',
  () =>
    class {
      async getPokemonsList(interval: any, callback: any) {}
      async getPokemonByName(interval: any, callback: any) {}
    },
);
