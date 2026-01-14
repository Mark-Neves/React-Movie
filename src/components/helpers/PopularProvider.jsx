import { useState } from 'react';
import { useFetcher } from '../../hooks/useFetcher';
import { PopularContext } from './GlobalContext';
import { useCallback } from 'react';
import { collections } from './filterConfig';

export function PopularProvider({ children }) {
  //POPULAR_MOVIES
  //Состояние выбранной коллекции
  const [activeCollection, setActiveCollection] = useState(0);
  const [pagePopular, setPagePopular] = useState(1);

  const handleCollection = useCallback((i) => {
    setActiveCollection(i);
    setPagePopular(1);
  }, []);

  const {
    dataArr: topMovies,
    isLoading: isLoadingTopMovies,
    error: errorTop,
    totalPages: totalPagesTop,
  } = useFetcher({
    url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${collections[activeCollection].type}&page=${pagePopular}`,
  });

  return (
    <PopularContext.Provider
      value={{
        topMovies,
        isLoadingTopMovies,
        errorTop,
        totalPagesTop,
        activeCollection,
        handleCollection,
        pagePopular,
        setPagePopular,
      }}
    >
      {children}
    </PopularContext.Provider>
  );
}
