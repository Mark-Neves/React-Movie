import { render, screen } from '@testing-library/react';

import { SelectCollectionButton } from './SelectCollectionButton';

import { vi } from 'vitest';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { PopularContext } from '../../components/helpers/GlobalContext';

it('Button behavior', async () => {
  const handleCollection = vi.fn();
  const activeCollection = 1;
  const index = 1;
  const element = { label: 'Тест' };

  render(
    <PopularContext.Provider value={{ activeCollection, handleCollection }}>
      <SelectCollectionButton element={element} index={index} />
    </PopularContext.Provider>,
  );

  const button = screen.getByTestId('popular-button');

  expect(button).toHaveTextContent(`Популярные ${element.label}`);

  if (activeCollection === index) {
    expect(button).toHaveClass(/active/);
  } else {
    expect(button).not.toHaveClass(/active/);
  }

  await userEvent.click(button);
  expect(handleCollection).toHaveBeenCalledWith(index);
});
