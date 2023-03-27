import '@testing-library/jest-dom/extend-expect';
import mockRouter from 'next-router-mock';
import {createDynamicRouteParser} from 'next-router-mock/dynamic-routes';

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

jest.mock('next/router', () => require('next-router-mock'));

mockRouter.useParser(createDynamicRouteParser(['/pokemons/[name]']));
