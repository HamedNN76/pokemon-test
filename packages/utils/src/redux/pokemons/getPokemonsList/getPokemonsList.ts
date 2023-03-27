import {ReduxFetchState} from 'redux-fetch-state';
import {put, takeEvery} from 'redux-saga/effects';
import {ListEndpointOptions, PokedexApi} from '../../../pokedex';
import Pokedex from 'pokedex-promise-v2';
import {TGetPokemonsListAction} from '../pokemon.type';

export const GetPokemonsFetchState = new ReduxFetchState<Pokedex.NamedAPIResourceList, ListEndpointOptions, string>(
  'getPokemons',
);

export function* watchGetPokemons(action?: TGetPokemonsListAction) {
  const {payload} = action || {};
  const {limit, offset} = payload || {};

  try {
    const data = yield PokedexApi.getPokemonsList({limit, offset});
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
