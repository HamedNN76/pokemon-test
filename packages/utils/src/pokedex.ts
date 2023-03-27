import Pokedex from 'pokedex-promise-v2';
import {TPaginationQuery} from './pagination';

export const PokedexApi = new Pokedex();

export type ListEndpointOptions = TPaginationQuery;
