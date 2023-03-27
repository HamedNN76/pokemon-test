/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from '@testing-library/react';
import {HomeContainer} from './HomeContainer';
import {testIds} from '@/constants';

describe('HomeContainer', () => {
  it('should be defined', () => {
    expect(HomeContainer).toBeDefined();
  });

  it('should render Header with welcome message', () => {
    const {getByTestId} = render(<HomeContainer />);
    const el = getByTestId(testIds.header.message);
    expect(el.innerHTML).toBe('Welcome to Pokemon Test');
  });

  it('should render children if exists', () => {
    const {getByTestId} = render(
      <HomeContainer>
        <div>Some children</div>
      </HomeContainer>,
    );
    const el = getByTestId(testIds.header.message);
    expect(el.childNodes.length).toBeTruthy();
  });
});
