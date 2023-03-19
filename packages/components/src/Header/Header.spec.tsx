/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from '@testing-library/react';
import {Header} from './Header';

test('renders header', () => {
  const message = 'Hello World!';
  const {getByTestId} = render(<Header message={message} />);

  const messageElement = getByTestId('headerMessage');

  expect(messageElement).toBeDefined();
  expect(messageElement.innerHTML).toEqual(message);
});
