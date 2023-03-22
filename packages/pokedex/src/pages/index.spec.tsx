import Home from '@pokedex/pages/index';
import {render, RenderResult} from '@testing-library/react';
import {testIds} from '@pokedex/constants/testIds';

describe('Home Page', function () {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  describe('Render', function () {
    let getByTestId: RenderResult['getByTestId'];

    beforeEach(() => {
      let rendered = render(<Home />);
      getByTestId = rendered.getByTestId;
    });

    it('should be render Head', () => {
      const titleEl = getByTestId(testIds.head.title);
      expect(titleEl).toHaveTextContent('All Pokemons');

      const descriptionEl = getByTestId(testIds.head.description);
      expect(descriptionEl).toHaveAttribute('content', 'Fetch all the pokemons');
    });
  });
});
