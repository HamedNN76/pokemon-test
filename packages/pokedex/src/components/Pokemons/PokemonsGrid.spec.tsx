import {render} from '@testing-library/react';
import React from 'react';
import {PokemonsGrid} from '@pokedex/components/Pokemons/PokemonsGrid';
import {testIds} from 'components';

describe('PokemonsGrid', function () {
  it('should be defined', function () {
    expect(PokemonsGrid).toBeDefined();
  });

  describe('Render', function () {
    it('should show count', function () {
      const {getByTestId, getByText} = render(
        <PokemonsGrid
          count={10}
          results={[{name: 'a', url: 'a'}]}
          isLoading={false}
          paginationQuery={{
            offset: 0,
            limit: 10,
          }}
        />,
      );

      const tableEl = getByTestId(testIds.home.table);
      expect(tableEl).toBeInTheDocument();

      const mockUser = {name: 'a', url: 'a'};
      const firstUserName = mockUser.name;
      const contentEl = getByText(firstUserName);
      expect(contentEl).toContainHTML(firstUserName);

      const urlEl = getByTestId(testIds.home.pokemonUrl(firstUserName));
      expect(urlEl).toHaveAttribute('href', `/pokemons/${mockUser.name}`);
    });

    it('should hide count', function () {
      const {queryByTestId} = render(<PokemonsGrid results={[]} count={0} />);

      const el = queryByTestId(testIds.home.total);
      expect(el).toBeFalsy();
    });
  });
});
