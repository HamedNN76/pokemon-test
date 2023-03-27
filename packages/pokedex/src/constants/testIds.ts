import {testIds as componentsTestIds} from 'components'

export const testIds = {
  ...componentsTestIds,
  head: {
    title: 'headTitle',
    description: 'headDescription',
  },
  home: {
    table: 'homeTable',
    total: 'homeTotal',
    loading: 'homeLoading',
    pokemonUrl: (id: string) => `pokemonUrl-${id}`,
  },
  singlePokemon: {
    header: (name: string) => `singlePokemonHeader-${name}`,
  },
};
