import React from 'react';
import {testIds} from 'components';

export type TotalPokemonsCountProps = {
  count?: number;
};

export function TotalPokemonsCount(props: TotalPokemonsCountProps) {
  const {count} = props;

  return count ? <p data-testid={testIds.home.total}>Total Pokemons: {count}</p> : null;
}
