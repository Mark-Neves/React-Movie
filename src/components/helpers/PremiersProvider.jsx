import { useFetcher } from '../../hooks/useFetcher';
import { PremiersContext } from './GlobalContext';

export function PremiersProvider({ children }) {
  // PREMIER_MOVIES;
  const {
    dataArr: premierMovies,
    isLoading: isLoadingPremierMovies,
    error: errorPremierMovies,
  } = useFetcher({
    url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1',
  });
  return (
    <PremiersContext.Provider value={{ premierMovies, isLoadingPremierMovies, errorPremierMovies }}>
      {children}
    </PremiersContext.Provider>
  );
}
