import { render, screen } from '@testing-library/react';

import { FavoriteButton } from './FavoriteButton';
import { describe } from 'vitest';
import { vi } from 'vitest';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('FavoriteButton component', () => {
  const isFavorite = true;
  const isCompact = true;

  it('Render isFavorite isCompact button', async () => {
    const onClick = vi.fn();
    render(<FavoriteButton isFavorite={isFavorite} onClick={onClick} isCompact={isCompact} />);

    const button = screen.getByText('Добавлен');

    expect(button).toHaveClass(/addButtonFavorite/);
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('Render button', async () => {
    const onClick = vi.fn();

    render(<FavoriteButton onClick={onClick} />);

    const button = screen.getByText('В избранное');

    expect(button).toHaveClass(/addButton/);
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
