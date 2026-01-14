import styles from './SearchBox.module.scss';

import { useEffect, useRef } from 'react';
import { debaunce } from '../helpers/filterConfig';

import { useContext } from 'react';
import { SearchContext, HeaderContext } from '../helpers/GlobalContext';

import { SectionCard } from '../SectionCard/SectionCard';

import { ErrorStub } from '../ErrorStub/ErrorStub';

export function SearchBox() {
  const { search, setSearch, inputHeaderRef, searchContainerRef } = useContext(HeaderContext);
  const { searchMovies, isLoadingSearch, errorSearch, searchQuery, setSearchQuery } =
    useContext(SearchContext);

  const debaunced = useRef(debaunce((value) => setSearchQuery(value), 400));
  useEffect(() => {
    debaunced.current(search);
    return () => debaunced.current?.clear();
  }, [search]);

  //Закрываем контейнер в зависимости от места клика
  useEffect(() => {
    if (search === '') return;
    const closeSearchBox = (e) => {
      if (inputHeaderRef.current !== e.target && !searchContainerRef.current.contains(e.target)) {
        setSearch('');
        setSearchQuery('');
      } else if (searchContainerRef.current.contains(e.target)) {
        debaunced.current('');
      }
    };
    document.addEventListener('click', closeSearchBox);
    return () => {
      document.removeEventListener('click', closeSearchBox);
    };
  }, [search]);

  let content;
  if (errorSearch !== null) content = <ErrorStub />;
  else if (!isLoadingSearch && searchMovies.length === 0)
    content = <p className={styles.noResult}>Похоже такого фильма нет...</p>;
  else
    content = (
      <SectionCard
        rows={1}
        movies={searchMovies}
        isLoading={isLoadingSearch}
        error={errorSearch}
        type={'search'}
        query={searchQuery}
        isCompact
      />
    );

  return (
    <section
      className={`${styles.container} ${searchQuery.length > 0 ? '' : styles.hidden}`}
      ref={searchContainerRef}
    >
      <h3 className={styles.title}>Фильмы и сериалы</h3>
      {content}
    </section>
  );
}
