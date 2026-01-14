import styles from './SectionCard.module.scss';

import { MovieCard } from '../MovieCard/MovieCard';
import { AllResultButton } from '../../ui/AllResultButton/AllResultButton';
import { Skeleton } from './Skeleton';

export function SectionCard({ movies, isLoading, isCompact, type, query = '', rows = 10 }) {
  const rowsClass = styles[`rows_${rows}`];

  return (
    <section className={styles.sectionCard}>
      {isCompact && (
        <div className={styles.wrapper}>
          {movies.length !== 0 && <AllResultButton type={type} query={query} />}
        </div>
      )}
      <div className={`${styles.movieContainer} ${rowsClass}`}>
        {movies.length === 0 || isLoading
          ? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
          : movies.map((movie) => (
              <MovieCard key={movie.kinopoiskId || movie.filmId} movie={movie} />
            ))}
      </div>
    </section>
  );
}
