import React from 'react';
import {HomeLoading} from '@/Home/HomeLoading';
import {render} from '@testing-library/react';
import {testIds} from '@/constants';

describe('HomeLoading', function () {
  it('should be defined', function () {
    expect(HomeLoading).toBeDefined();
  });

  describe('Render', function () {
    it('should show loader', function () {
      const {getByTestId} = render(<HomeLoading loading />);

      const el = getByTestId(testIds.home.loading);
      expect(el).toBeTruthy();
    });

    it('should hide loader', function () {
      const {queryByTestId} = render(<HomeLoading loading={false} />);

      const el = queryByTestId(testIds.home.loading);
      expect(el).toBeFalsy();
    });
  });
});
