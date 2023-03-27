import {getPokemonByNameSagas, getPokemonsSagas} from 'utils';
import {SagaStore} from '@pokedex/redux/store';
import {all} from 'redux-saga/effects';

export function* rootSaga(store: SagaStore) {
  yield all([getPokemonsSagas(), getPokemonByNameSagas()]);
}
