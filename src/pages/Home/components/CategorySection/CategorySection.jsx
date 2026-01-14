import styles from './CategorySection.module.scss';

import { SectionCard } from '../../../../components/SectionCard/SectionCard';
import { CategorySectionBar } from '../../../../components/CategorySectionBar/CategorySectionBar';
import { ErrorStub } from '../../../../components/ErrorStub/ErrorStub';
import { useContext } from 'react';
import { CategoryContext } from '../../../../components/helpers/GlobalContext';
import { useEffect } from 'react';

export function CategorySection({ cardLimited, isCompact, visibleRows }) {
  const type = 'category';
  const { categoryMovies, isLoadingcategoryMovies, errorCategory, setPageCategory } =
    useContext(CategoryContext);
  useEffect(() => {
    setPageCategory(1);
  });

  return (
    <section className={styles.category}>
      <div className={styles.wrapperTitle}>
        <span className={styles.titleCategory}>Поиск по категориям</span>
      </div>
      <CategorySectionBar />
      {errorCategory ? (
        <ErrorStub />
      ) : (
        <SectionCard
          cardLimited={cardLimited}
          movies={categoryMovies}
          isLoading={isLoadingcategoryMovies}
          type={type}
          isCompact={isCompact}
          rows={visibleRows}
        />
      )}
    </section>
  );
}
