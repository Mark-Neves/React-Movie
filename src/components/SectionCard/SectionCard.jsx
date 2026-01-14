import styles from './SectionCard.module.scss';

import { MovieCard } from '../MovieCard/MovieCard';
import { AllResultButton } from '../../ui/AllResultButton/AllResultButton';
import { Skeleton } from '../MovieCard/Skeleton';

export function SectionCard({ movies, isCompact, type, query = '', rows = 10 }) {
  const rowsClass = styles[`rows_${rows}`];
  let content;
  if (movies.length === 0) content = [...new Array(10)].map((_, i) => <Skeleton key={i} />);
  else
    content = movies.map((movie) => (
      <MovieCard key={movie.kinopoiskId || movie.filmId} movie={movie} />
    ));
  return (
    <section className={styles.sectionCard}>
      {isCompact && (
        <div className={styles.wrapper}>
          {movies.length !== 0 && <AllResultButton type={type} query={query} />}
        </div>
      )}
      <div className={`${styles.movieContainer} ${rowsClass}`}>{content}</div>
    </section>
  );
}
