import styles from './MovieCard.module.scss';

import { Link } from 'react-router-dom';
import { scrollTo } from '../helpers/filterConfig';
import { useState } from 'react';

import { SkeletonImg } from './SkeletonImg';

export function MovieCard({ movie }) {
  const { kinopoiskId, filmId, posterUrl, nameRu, year, ratingKinopoisk } = movie;
  const id = kinopoiskId || filmId;
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  const updateLoading = () => {
    setIsLoadingImg(false);
  };

  return (
    <article className={styles.card}>
      <Link to={`/content/${id}`} onClick={scrollTo}>
        {isLoadingImg && <SkeletonImg />}
        <img
          className={`${styles.poster} ${isLoadingImg ? styles.loaded : ''}`}
          src={posterUrl}
          alt={`Постер фильма ${nameRu}`}
          onLoad={updateLoading}
          loading='lazy'
        />

        <h3 className={styles.title}>{nameRu}</h3>
        <div className={styles.footerCard}>
          {year && <span className={styles.year}>{year}г.</span>}
          {ratingKinopoisk && <span className={styles.rating}>{ratingKinopoisk}/10</span>}
        </div>
      </Link>
    </article>
  );
}
