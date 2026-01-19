import { memo } from 'react';
import styles from './MovieRating.module.scss';

export const MovieRating = memo(function MovieRating({ movie, isCompact }) {
  const wrapperRating = isCompact ? styles.wrapperRatingFavorite : styles.wrapperRating;
  const { ratingKinopoisk, ratingImdb } = movie;

  return (
    <>
      {(ratingKinopoisk || ratingImdb) && (
        <div className={wrapperRating}>
          {ratingKinopoisk && <p className={styles.rating}>Кинопоиск {ratingKinopoisk}/10</p>}
          {ratingImdb && <p className={styles.rating}>IMDb {ratingImdb}/10</p>}
        </div>
      )}
    </>
  );
});
