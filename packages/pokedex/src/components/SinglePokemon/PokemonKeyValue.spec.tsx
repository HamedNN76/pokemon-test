import React from 'react';
import {render} from '@testing-library/react';
import {getPokemonByNameMock} from 'utils';
import {PokemonKeyValue} from '@pokedex/components/SinglePokemon/PokemonKeyValue';

describe('Pokemon', function () {
  it('should be defined', function () {
    expect(PokemonKeyValue).toBeDefined();
  });

  it('should render', function () {
    const {getByText} = render(<PokemonKeyValue {...getPokemonByNameMock} />);
    expect(getByText(`name: ${getPokemonByNameMock.name}`)).toBeTruthy();
    expect(getByText(`id: ${getPokemonByNameMock.id}`)).toBeTruthy();
    expect(getByText(`height: ${getPokemonByNameMock.height}`)).toBeTruthy();
    expect(getByText(`order: ${getPokemonByNameMock.order}`)).toBeTruthy();
  });
});
