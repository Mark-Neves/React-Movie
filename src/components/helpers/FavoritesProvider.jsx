import { useState } from 'react';

import { useEffect } from 'react';
import { FavoritesContext } from './GlobalContext';
import { dataStorage } from './filterConfig';

export function FavoritesProvider({ children }) {
  const storage = dataStorage.get('favorite', []);
  const [favoritesList, setFavoritesList] = useState(storage);

  const isFavorite = (id) => {
    return favoritesList.some((el) => el.id === id);
  };

  const addFavoritesList = (obj) => {
    setFavoritesList((prev) => [...prev, obj]);
  };
  const deleteFavoritesList = (id) => {
    setFavoritesList((prev) => prev.filter((el) => el.id !== id));
  };
  const updateFavoritesList = (id, obj) => {
    isFavorite(id) ? deleteFavoritesList(id) : addFavoritesList(obj);
  };

  useEffect(() => {
    dataStorage.set('favorite', favoritesList);
  }, [favoritesList]);

  return (
    <FavoritesContext.Provider value={{ favoritesList, isFavorite, updateFavoritesList }}>
      {children}
    </FavoritesContext.Provider>
  );
}
