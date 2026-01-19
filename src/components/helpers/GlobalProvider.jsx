import { PremiersProvider } from './PremiersProvider';
import { PopularProvider } from './PopularProvider';
import { CategoryProvider } from './CategoryProvider';
import { FavoritesProvider } from './favoritesProvider';
import { SearchProvider } from './SearchProvider';

export function GlobalProvider({ children }) {
  return (
    <PremiersProvider>
      <PopularProvider>
        <CategoryProvider>
          <FavoritesProvider>
            <SearchProvider>{children}</SearchProvider>
          </FavoritesProvider>
        </CategoryProvider>
      </PopularProvider>
    </PremiersProvider>
  );
}
