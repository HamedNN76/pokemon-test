import {TotalPokemonsCount} from '@/Home/TotalPokemonsCount';
import {render} from '@testing-library/react';
import {testIds} from '@/constants';
import React from 'react';

describe('TotalPokemonsCount', function () {
  it('should be defined', function () {
    expect(TotalPokemonsCount).toBeDefined();
  });
  describe('Render', function () {
    it('should show count', function () {
      const {getByTestId} = render(<TotalPokemonsCount count={200} />);

      const el = getByTestId(testIds.home.total);
      expect(el).toBeTruthy();
      expect(el).toHaveTextContent('200');
    });

    it('should hide count', function () {
      const {queryByTestId} = render(<TotalPokemonsCount />);

      const el = queryByTestId(testIds.home.total);
      expect(el).toBeFalsy();
    });
  });
});
