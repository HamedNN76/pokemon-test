import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import {createDynamicRouteParser} from 'next-router-mock/dynamic-routes';

// @ts-ignore
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({children}: {children: any}) => {
      return children;
    },
  };
});

// @ts-ignore
jest.mock(
  'pokedex-promise-v2',
  () =>
    class {
      async getPokemonsList(interval: any, callback: any) {}
      async getPokemonByName(interval: any, callback: any) {}
    },
);

// @ts-ignore
jest.mock('next/router', () => require('next-router-mock'));

mockRouter.useParser(createDynamicRouteParser(['/pokemons/[name]']));
