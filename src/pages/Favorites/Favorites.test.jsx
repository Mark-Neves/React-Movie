import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { Favorites } from './Favorites';
import { FavoritesContext } from '../../components/helpers/GlobalContext';

const mockFavoritesEmpty = [];
const mockFavorites = [
  { id: 1, movie: { nameRu: 'Фильм 1' } },
  { id: 2, movie: { nameRu: 'Фильм 2' } },
];

describe('Favorites components', () => {
  it('Placeholder when the favorites list is empty', () => {
    render(
      <FavoritesContext.Provider value={{ favoritesList: mockFavoritesEmpty }}>
        <Favorites />
      </FavoritesContext.Provider>,
    );
    const emptyFavorites = screen.getByText('В избранном пусто');
    expect(emptyFavorites).toBeInTheDocument();
  });

  it('Displaying the Favorites List', () => {
    render(
      <FavoritesContext.Provider
        value={{
          favoritesList: mockFavorites,
          isFavorite: (id) => mockFavorites.some((el) => el.id === id),
          updateFavoritesList: vi.fn(),
        }}
      >
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </FavoritesContext.Provider>,
    );
    const titleItems = screen.getAllByTestId('title-content');
    expect(titleItems).toHaveLength(mockFavorites.length);
  });
});
