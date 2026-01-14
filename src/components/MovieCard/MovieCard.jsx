import styles from './MovieCard.module.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollTo } from '../helpers/filterConfig';

import { Skeleton } from './Skeleton';
export function MovieCard({ movie }) {
  const { kinopoiskId, filmId, posterUrl, nameRu, year, ratingKinopoisk } = movie;
  const id = kinopoiskId || filmId;
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  const handleLoadingImg = () => {
    setIsLoadingImg(false);
  };

  return (
    <article className={styles.card}>
      <Link to={`/content/${id}`} onClick={scrollTo}>
        {isLoadingImg && <Skeleton />}
        <img
          className={styles.poster}
          src={posterUrl}
          alt={`Постер фильма ${nameRu}`}
          onLoad={handleLoadingImg}
          loading='lazy'
        />
        {!isLoadingImg && (
          <>
            <h3 className={styles.title}>{nameRu}</h3>
            <div className={styles.footerCard}>
              {year && <span className={styles.year}>{year}г.</span>}
              {ratingKinopoisk && <span className={styles.rating}>{ratingKinopoisk}/10</span>}
            </div>
          </>
        )}
      </Link>
    </article>
  );
}
