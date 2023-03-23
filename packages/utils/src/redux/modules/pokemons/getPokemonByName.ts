import {ReduxFetchState} from 'redux-fetch-state';
import {put, takeEvery} from 'redux-saga/effects';
import {PokedexApi} from 'pokeapi';
import {TGetPokemonByNameForm, TGetPokemonByNameRes, TTGetPokemonByNameAction} from './pokemon.type';

export const GetPokemonByNameFetchState = new ReduxFetchState<TGetPokemonByNameRes, TGetPokemonByNameForm, string>(
  'getPokemonByName',
);

export function* watchGetPokemonByName({payload}: TTGetPokemonByNameAction) {
  try {
    const {name} = payload;

    const data = yield PokedexApi.getPokemonByName(name);
    yield put(getPokemonByNameActions.loadSuccess(data));
  } catch (e) {
    yield put(getPokemonByNameActions.loadFailure(e.message));
  }
}

export function* getPokemonByNameSagas() {
  yield takeEvery(getPokemonByNameActionTypes.load, watchGetPokemonByName);
}

export const {
  actions: getPokemonByNameActions,
  reducer: getPokemonByNameReducer,
  actionTypes: getPokemonByNameActionTypes,
} = GetPokemonByNameFetchState;
