import { PremiersProvider } from './PremiersProvider';
import { PopularProvider } from './PopularProvider';
import { CategoryProvider } from './CategoryProvider';
import { SearchProvider } from './SearchProvider';

export function GlobalProvider({ children }) {
  return (
    <PremiersProvider>
      <PopularProvider>
        <CategoryProvider>
          <SearchProvider>{children}</SearchProvider>
        </CategoryProvider>
      </PopularProvider>
    </PremiersProvider>
  );
}
