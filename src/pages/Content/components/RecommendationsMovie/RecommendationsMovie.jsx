import styles from './RecommendationsMovie.module.scss';
import { SectionCard } from '../../../../components/SectionCard/SectionCard';
import { memo } from 'react';

export const RecommendationsMovie = memo(function RecommendationsMovie({
  similarMovies,
  isLoadingSimilar,
  visibleRows,
}) {
  return (
    <>
      {similarMovies.length ? (
        <div className={styles.recomendationWrapper}>
          <span className={styles.recomendationTitle}>Возможно понравятся</span>
          <SectionCard
            movies={similarMovies}
            isLoading={isLoadingSimilar}
            allResult={false}
            rows={visibleRows}
          />
        </div>
      ) : null}
    </>
  );
});
