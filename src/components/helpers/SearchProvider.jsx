import { useMemo } from 'react';
import { useFetcher } from '../../hooks/useFetcher';
import { SearchContext } from './GlobalContext';
import { useState } from 'react';

export function SearchProvider({ children }) {
  //  SEARCH_MOVIES
  const [searchQuery, setSearchQuery] = useState('');

  const searchUrl = useMemo(() => {
    if (!searchQuery) return null;
    return `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(
      searchQuery,
    )}&page=1`;
  }, [searchQuery]);

  const {
    dataArr: searchMovies,
    isLoading: isLoadingSearch,
    error: errorSearch,
    totalPages: totalPagesSearch,
  } = useFetcher({
    url: searchUrl,
  });

  return (
    <SearchContext.Provider
      value={{
        searchMovies,
        isLoadingSearch,
        errorSearch,
        searchQuery,
        totalPagesSearch,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
