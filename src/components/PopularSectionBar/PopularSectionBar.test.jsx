import { render, screen } from '@testing-library/react';
import { PopularSectionBar } from './PopularSectionBar';
import { collections } from '../helpers/filterConfig';
import { PopularContext } from '../helpers/GlobalContext';
import { vi } from 'vitest';

it('The component displays the entire list of buttons', () => {
  render(
    <PopularContext.Provider value={{ activeCollection: 0, handleCollection: vi.fn() }}>
      <PopularSectionBar />
    </PopularContext.Provider>,
  );
  const popularButtons = screen.getAllByTestId('popular-button');
  expect(popularButtons).toHaveLength(collections.length);
});
