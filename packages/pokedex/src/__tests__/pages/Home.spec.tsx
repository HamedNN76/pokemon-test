import Home from '@pokedex/pages';
import {testIds} from 'components';
import {renderWithProviders} from '@pokedex/redux/renderWithProviders';
import {defaultPaginationQuery, getPokemonsActions, getPokemonsReducer, pokemonMockPageOne} from 'utils';

describe('Home Page', function () {
  it('should be defined', function () {
    expect(Home).toBeDefined();
  });

  it('should render table', () => {
    const {getByTestId, getByText, queryByTestId} = renderWithProviders(<Home {...defaultPaginationQuery} />, {
      preloadedState: {
        getPokemons: getPokemonsReducer(undefined, getPokemonsActions.loadSuccess(pokemonMockPageOne)),
      },
    });

    const totalEl = queryByTestId(testIds.home.total);
    expect(totalEl).toHaveTextContent(`Total Pokemons: ${pokemonMockPageOne.count}`);
  });

  it('should load the data, show loading, and not show table', () => {
    const {queryByTestId} = renderWithProviders(<Home {...defaultPaginationQuery} />, {
      preloadedState: {
        getPokemons: getPokemonsReducer(undefined, getPokemonsActions.load()),
      },
    });

    const el = queryByTestId(testIds.home.total);
    expect(el).toBeFalsy();

    const loadingEl = queryByTestId(testIds.home.loading);
    expect(loadingEl).toBeTruthy();
  });
});
