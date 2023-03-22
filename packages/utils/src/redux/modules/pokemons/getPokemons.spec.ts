import * as assert from 'assert';
import {
  getPokemonsActions,
  getPokemonsActionTypes,
  GetPokemonsFetchState,
  getPokemonsSagas,
  watchGetPokemons,
} from './getPokemons';
import {takeEvery, put} from 'redux-saga/effects';
import {pokemonMockPageOne} from 'pokeapi';

describe('Pokemons Redux Module', function () {
  it('Fetch State should be defined', function () {
    expect(GetPokemonsFetchState).toBeDefined();
    expect(GetPokemonsFetchState.reducer).toBeDefined();
    expect(GetPokemonsFetchState.actions).toBeDefined();
    expect(GetPokemonsFetchState.actionTypes).toBeDefined();
  });

  describe('Saga', function () {
    describe('Root module saga', function () {
      it('should be defined', function () {
        expect(getPokemonsSagas).toBeDefined();
      });

      it('should yield getPokemons watcher', function () {
        const gen = getPokemonsSagas();
        assert.deepEqual(
          gen.next().value,
          takeEvery(getPokemonsActionTypes.load, watchGetPokemons),
          'it should yield watchGetPokemons',
        );
      });
    });

    describe('Get Pokemons Watcher', function () {
      it('should be defined', function () {
        expect(watchGetPokemons).toBeDefined();
      });

      it('should fetch the API and call the success action', function () {
        const gen = watchGetPokemons();
        gen.next();
        assert.deepEqual(gen.next(pokemonMockPageOne).value, put(getPokemonsActions.loadSuccess(pokemonMockPageOne)));
      });

      it('should fetch the API and call the failure action', function () {
        const gen = watchGetPokemons();
        gen.next();
        const error = new Error('error');
        assert.deepEqual(gen.throw(error).value, put(getPokemonsActions.loadFailure(error.message)));
      });
    });
  });
});
