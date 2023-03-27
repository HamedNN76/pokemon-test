export const testIds = {
  header: {
    message: 'headerMessage',
  },
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
