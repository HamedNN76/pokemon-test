import {ReduxFetchState} from 'redux-fetch-state';
import {put, takeEvery} from 'redux-saga/effects';
import {PokedexApi} from 'pokeapi';
export const GetPokemonsFetchState = new ReduxFetchState('getPokemons');

export function* watchGetPokemons() {
  try {
    const data = yield PokedexApi.getPokemonsList();
    yield put(getPokemonsActions.loadSuccess(data));
  } catch (e) {
    yield put(getPokemonsActions.loadFailure(e.message));
  }
}
export function* getPokemonsSagas() {
  yield takeEvery(getPokemonsActionTypes.load, watchGetPokemons);
}

export const {
  actions: getPokemonsActions,
  reducer: getPokemonsReducer,
  actionTypes: getPokemonsActionTypes,
} = GetPokemonsFetchState;
