import React from 'react';
import {TGetPokemonByNameRes} from 'utils';
import {Card} from '@mui/material';

export type PokemonKeyValueProps = TGetPokemonByNameRes;

export function PokemonKeyValue(props: PokemonKeyValueProps) {
  const {name, id, height, order, abilities} = props;
  return (
    <>
      <Card>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>height: {height}</p>
        <p>order: {order}</p>
        <p>
          abilities:{' '}
          {abilities.map((ability, i) => (
            <span key={`${ability.ability.name}-${i}`}>
              {ability.ability.name}
              {i + 1 === abilities.length ? '' : ', '}
            </span>
          ))}
        </p>
      </Card>
    </>
  );
}
