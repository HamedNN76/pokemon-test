import SinglePokemon from '@pokedex/pages/pokemons/[name]';
import {renderWithProviders} from '@pokedex/redux/renderWithProviders';
import {testIds} from 'components';
import mockRouter from 'next-router-mock';

describe('Single Pokemon', function () {
  const mockName = 'hallo';

  beforeEach(() => {
    mockRouter.reload();
    mockRouter.push(`/pokemons/${mockName}`);
  });

  it('should be defined', function () {
    expect(SinglePokemon).toBeDefined();
  });

  it('should render the name on header', function () {
    const {queryByTestId} = renderWithProviders(<SinglePokemon name={mockName} />);

    const el = queryByTestId(testIds.header.message);
    expect(el).toBeTruthy();
    expect(el).toContainHTML(`Pokemon: ${mockName}`);
  });
});
