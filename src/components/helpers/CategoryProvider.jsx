import { useState } from 'react';
import { useFetcher } from '../../hooks/useFetcher';
import { defoltFilter } from './filterConfig';
import { CategoryContext } from './GlobalContext';

export function CategoryProvider({ children }) {
  //CATEGORY_MOVIES
  // Состояние изменения фильтров
  const [filters, setFilter] = useState({ ...defoltFilter });
  const [pageCategory, setPageCategory] = useState(1);

  const {
    dataArr: categoryMovies,
    isLoading: isLoadingcategoryMovies,
    error: errorCategory,
    totalPages: totalPagesCategory,
  } = useFetcher({
    url: `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=${filters.countries.id}&genres=${filters.category.id}&order=${filters.sortCollectionFilter.id}&type=${filters.typeCollection.id}&ratingFrom=${filters.rating.id}&ratingTo=10&yearFrom=${filters.year.id.from}&yearTo=${filters.year.id.to}&page=${pageCategory}`,
  });
  return (
    <CategoryContext.Provider
      value={{
        filters,
        categoryMovies,
        isLoadingcategoryMovies,
        errorCategory,
        totalPagesCategory,
        setFilter,
        pageCategory,
        setPageCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
