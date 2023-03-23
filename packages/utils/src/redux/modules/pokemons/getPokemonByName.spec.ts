import * as assert from 'assert';
import {
  getPokemonByNameActions,
  getPokemonByNameActionTypes,
  GetPokemonByNameFetchState,
  getPokemonByNameSagas,
  watchGetPokemonByName,
} from './getPokemonByName';
import {takeEvery, put} from 'redux-saga/effects';
import {getPokemonByNameMock} from 'pokeapi';

describe('Pokemons Redux Module', function () {
  it('Fetch State should be defined', function () {
    expect(GetPokemonByNameFetchState).toBeDefined();
    expect(GetPokemonByNameFetchState.reducer).toBeDefined();
    expect(GetPokemonByNameFetchState.actions).toBeDefined();
    expect(GetPokemonByNameFetchState.actionTypes).toBeDefined();
  });

  describe('Saga', function () {
    describe('Root module saga', function () {
      it('should be defined', function () {
        expect(getPokemonByNameSagas).toBeDefined();
      });

      it('should yield getPokemonByName watcher', function () {
        const gen = getPokemonByNameSagas();
        assert.deepEqual(
          gen.next().value,
          takeEvery(getPokemonByNameActionTypes.load, watchGetPokemonByName),
          'it should yield watchGetPokemonByName',
        );
      });
    });

    describe('Get Pokemons Watcher', function () {
      it('should be defined', function () {
        expect(watchGetPokemonByName).toBeDefined();
      });

      it('should fetch the API and call the success action', function () {
        const gen = watchGetPokemonByName(getPokemonByNameActions.load({name: 'anything'}));
        gen.next();
        assert.deepEqual(
          gen.next(getPokemonByNameMock).value,
          put(getPokemonByNameActions.loadSuccess(getPokemonByNameMock)),
          'dispatch getPokemonByNameActions success with data',
        );
      });

      it('should fetch the API and call the failure action', function () {
        const gen = watchGetPokemonByName(getPokemonByNameActions.load({name: 'anything'}));
        gen.next();
        const error = new Error('error');
        assert.deepEqual(
          gen.throw(error).value,
          put(getPokemonByNameActions.loadFailure(error.message)),
          'dispatch getPokemonByNameActions failure with error',
        );
      });
    });
  });
});
