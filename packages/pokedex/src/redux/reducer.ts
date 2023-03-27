import {combineReducers} from '@reduxjs/toolkit';
import {getPokemonByNameReducer, getPokemonsReducer} from 'utils';
import {HYDRATE} from 'next-redux-wrapper';

export const combinedReducers = combineReducers({
  getPokemons: getPokemonsReducer,
  getPokemonByName: getPokemonByNameReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducers(state, action);
  }
};
