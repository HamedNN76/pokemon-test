import {PokedexApi} from '@/pokedex';
import {getPokemonByNameMock} from '@/getPokemonByName/getPokemonByName.mock';
import {Pokemon} from 'pokedex-promise-v2';

describe(`it should fetch`, () => {
  const mockedGetPokemonByName = jest.fn(PokedexApi.getPokemonByName);

  beforeEach(() => {
    mockedGetPokemonByName.mockReset();
  });

  it('should be defined', () => {
    expect(PokedexApi.getPokemonByName).toBeDefined();
  });

  it('should get pokemon with name golbat', async () => {
    mockedGetPokemonByName.mockResolvedValue(getPokemonByNameMock);
    const {name} = (await mockedGetPokemonByName('golbat')) as Pokemon;

    expect(mockedGetPokemonByName).toBeCalledTimes(1);

    expect(name).toBe('golbat');
  });

  it('should log an error if the request failed', async () => {
    const error = new Error('Error');

    mockedGetPokemonByName.mockRejectedValue(error);

    let thrownError;
    try {
      await mockedGetPokemonByName('');
    } catch (e) {
      thrownError = e;
    }

    expect(thrownError).toEqual(error);
  });
});
