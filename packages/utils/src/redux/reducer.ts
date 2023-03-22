import {combineReducers} from '@reduxjs/toolkit';
import {getPokemonsReducer} from './modules/pokemons/getPokemons';

export const reducer = combineReducers({
  getPokemons: getPokemonsReducer,
});
