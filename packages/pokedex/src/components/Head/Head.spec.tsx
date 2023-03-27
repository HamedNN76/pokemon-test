/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from '@testing-library/react';
import {Head} from '@pokedex/components/Head';
import {testIds} from 'components';

describe('Head', () => {
  it('should be defined', () => {
    expect(Head).toBeDefined();
  });

  describe('title Prop', () => {
    it('should render title if exist', async () => {
      const title = 'Any Title';
      const {getByTestId} = render(<Head title={title} />);

      const el = getByTestId(testIds.head.title);

      expect(el).toHaveTextContent(title);
    });

    it('should not render title', async () => {
      const {queryByTestId} = render(<Head />);

      const el = queryByTestId(testIds.head.title);

      expect(el).not.toBeInTheDocument();
    });
  });

  describe('description Prop', () => {
    it('should render description if exist', async () => {
      const description = 'Any Description';
      const {getByTestId} = render(<Head description={description} />);

      const el = getByTestId(testIds.head.description);

      expect(el).toHaveAttribute('content', description);
    });

    it('should not render description', async () => {
      const {queryByTestId} = render(<Head />);

      const el = queryByTestId(testIds.head.description);

      expect(el).not.toBeInTheDocument();
    });
  });
});
