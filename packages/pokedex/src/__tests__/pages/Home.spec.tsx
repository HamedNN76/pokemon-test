import Home from '@pokedex/pages';
import {testIds} from '@pokedex/constants/testIds';
import {renderWithProviders} from '@pokedex/redux/renderWithProviders';
import {getPokemonsActions, getPokemonsReducer, pokemonMockPageOne} from 'utils';

describe('Home Page', function () {
  it('should be defined', function () {
    expect(Home).toBeDefined();
  });

  it('should render table', () => {
    const {getByTestId, getByText, queryByTestId} = renderWithProviders(<Home />, {
      preloadedState: {
        getPokemons: getPokemonsReducer(undefined, getPokemonsActions.loadSuccess(pokemonMockPageOne)),
      },
    });

    const totalEl = queryByTestId(testIds.home.total);
    expect(totalEl).toHaveTextContent(`Total Pokemons: ${pokemonMockPageOne.results.length}`);

    const tableEl = getByTestId(testIds.home.table);
    expect(tableEl).toBeInTheDocument();

    const mockUser = pokemonMockPageOne.results[0];
    const firstUserName = mockUser.name;
    const contentEl = getByText(firstUserName);
    expect(contentEl).toContainHTML(firstUserName);

    const urlEl = getByTestId(testIds.home.pokemonUrl(firstUserName));
    expect(urlEl).toHaveAttribute('href', `/pokemons/${mockUser.name}`);
  });

  it('should load the data, show loading, and not show table', () => {
    const {queryByTestId} = renderWithProviders(<Home />, {
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
