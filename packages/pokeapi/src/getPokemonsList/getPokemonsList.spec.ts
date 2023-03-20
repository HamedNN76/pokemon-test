import {pokemonMockPageOne, pokemonMockPageThree, pokemonMockPageTwo} from '@/getPokemonsList/getPokemonsList.mock';
import {ListEndpointOptions, PokedexApi} from '@/pokedex';

describe(`it should fetch`, () => {
  const mockedGetPokemonsList = jest.fn(PokedexApi.getPokemonsList);

  beforeEach(() => {
    mockedGetPokemonsList.mockReset();
  });

  it('should be defined', () => {
    expect(PokedexApi.getPokemonsList).toBeDefined();
  });

  it('should get pokemon page 1', async () => {
    mockedGetPokemonsList.mockResolvedValue(pokemonMockPageOne);
    const data = await mockedGetPokemonsList();

    expect(mockedGetPokemonsList).toBeCalledTimes(1);

    expect(data.results.length).toBe(2);
    expect(data.next).toBeTruthy();
    expect(data.previous).toBeFalsy();
  });

  it('should get pokemon page 2', async () => {
    const paginationParams: ListEndpointOptions = {
      limit: 2,
      offset: 2,
    };
    mockedGetPokemonsList.mockResolvedValue(pokemonMockPageTwo);
    const data = await mockedGetPokemonsList(paginationParams);

    expect(mockedGetPokemonsList).toBeCalledTimes(1);
    expect(mockedGetPokemonsList).toBeCalledWith(paginationParams);

    expect(data.results.length).toBe(2);
    expect(data.next).toBeTruthy();
    expect(data.previous).toBeTruthy();
  });

  it('should get pokemon last page', async () => {
    const paginationParams: ListEndpointOptions = {
      limit: 4,
      offset: 2,
    };
    mockedGetPokemonsList.mockResolvedValue(pokemonMockPageThree);

    const data = await mockedGetPokemonsList(paginationParams);

    expect(mockedGetPokemonsList).toBeCalledTimes(1);
    expect(mockedGetPokemonsList).toBeCalledWith(paginationParams);

    expect(data.results.length).toBeLessThanOrEqual(2);
    expect(data.next).toBeFalsy();
    expect(data.previous).toBeTruthy();
  });

  it('should log an error if the request failed', async () => {
    const error = new Error('Error');

    mockedGetPokemonsList.mockRejectedValue(error);

    let thrownError;
    try {
      await mockedGetPokemonsList();
    } catch (e) {
      thrownError = e;
    }

    expect(thrownError).toEqual(error);
  });
});
