import styles from './Search.module.scss';
import { scrollTo } from '../../components/helpers/filterConfig';

import { useContext } from 'react';
import {
  SearchContext,
  PopularContext,
  CategoryContext,
} from '../../components/helpers/GlobalContext';

import { useSearchParams } from 'react-router-dom';

import { TitleContent } from '../../components/TitleContent/TitleContent';
import { PopularSectionBar } from '../../components/PopularSectionBar/PopularSectionBar';

import { CategorySectionBar } from '../../components/CategorySectionBar/CategorySectionBar';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Pagination } from '../../components/Pagination';
import { MovieContentSub } from '../../components/MovieContentSub';
import { ErrorStub } from '../../components/ErrorStub/ErrorStub';

export function Search() {
  const [params] = useSearchParams();
  const type = params.get('type');

  const { topMovies, isLoadingTopMovies, errorTop, totalPagesTop, pagePopular, setPagePopular } =
    useContext(PopularContext);

  const {
    categoryMovies,
    isLoadingcategoryMovies,
    errorCategory,
    totalPagesCategory,
    pageCategory,
    setPageCategory,
  } = useContext(CategoryContext);

  const { searchMovies, isLoadingSearch, errorSearch, totalPagesSearch } =
    useContext(SearchContext);

  const page = type === 'popular' ? pagePopular : pageCategory;
  const changePages = type === 'popular' ? setPagePopular : setPageCategory;

  let movies;
  let isLoading;
  let error;
  let totalPages;
  if (type === 'category') {
    movies = categoryMovies;
    isLoading = isLoadingcategoryMovies;
    error = errorCategory;
    totalPages = totalPagesCategory;
  } else if (type === 'popular') {
    movies = topMovies;
    isLoading = isLoadingTopMovies;
    error = errorTop;
    totalPages = totalPagesTop;
  } else {
    movies = searchMovies;
    isLoading = isLoadingSearch;
    error = errorSearch;
    totalPages = totalPagesSearch;
  }

  const previousList = () => {
    if (page > 1) {
      scrollTo();
      changePages((prev) => prev - 1);
    }
  };
  const nextList = () => {
    if (page < totalPages) {
      scrollTo();
      changePages((prev) => prev + 1);
    }
  };

  let content;
  if (error) content = <ErrorStub />;
  else if (isLoading) content = <MovieContentSub />;
  else if (type === 'category')
    content = (
      <>
        <CategorySectionBar />
        <SectionCard movies={movies} isLoading={isLoading} isCompact={false} />
      </>
    );
  else
    content = (
      <>
        {type === 'popular' && <PopularSectionBar isCompact />}
        {movies.map((el) => (
          <TitleContent key={el.kinopoiskId || el.filmId} isCompact movie={el} />
        ))}
      </>
    );

  return (
    <div className={styles.container}>
      {content}
      {totalPages > 1 && (
        <Pagination
          count={page}
          previousValue={previousList}
          nextValue={nextList}
          limit={totalPages}
        />
      )}
    </div>
  );
}
