/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from '@testing-library/react';
import {Header} from './Header';
import {testIds} from "@/constants/testIds";

test('renders header', () => {
  const message = 'Hello World!';
  const {getByTestId} = render(<Header message={message} />);

  const messageElement = getByTestId(testIds.header.message);

  expect(messageElement).toBeDefined();
  expect(messageElement.innerHTML).toEqual(message);
});
