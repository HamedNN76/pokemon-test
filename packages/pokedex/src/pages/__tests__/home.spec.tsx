import Home from '@pokedex/pages';
import {testIds} from '@pokedex/constants/testIds';
import {renderWithProviders} from '@pokedex/redux/renderWithProviders';
import {getPokemonsActions, getPokemonsReducer, pokemonMockPageOne} from 'utils';

describe('Home Page', function () {
  it('should be defined', function () {
    expect(Home).toBeDefined();
  });

  it('should render table', () => {
    const {getByTestId} = renderWithProviders(<Home />, {
      preloadedState: {
        getPokemons: getPokemonsReducer(undefined, getPokemonsActions.loadSuccess(pokemonMockPageOne)),
      },
    });

    const el = getByTestId(testIds.home.table);

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(`length: ${pokemonMockPageOne.results.length.toString()}`);
  });
});
