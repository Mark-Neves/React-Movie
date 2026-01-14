import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './PremiersItem.module.scss';
import { PremiersItemSkeleton } from './PremiersItemSkeleton/index.jsx';

export function PremiersItem({ movie, info }) {
  const { nameRu, description, posterUrl } = movie;
  const [isActiv, setIsActiv] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const toggleActive = () => {
    setIsActiv((prev) => !prev);
  };

  return (
    <article
      className={styles.wrapper}
      onMouseEnter={toggleActive}
      onMouseLeave={toggleActive}
      style={{
        backgroundImage: isLoadingImg ? `url(${posterUrl})` : 'none',
      }}
    >
      <img
        src={posterUrl}
        alt={nameRu}
        className={styles.hiddenImg}
        onLoad={() => setIsLoadingImg(true)}
      />
      {!posterUrl || !isLoadingImg ? (
        <PremiersItemSkeleton />
      ) : (
        <Link to={`/content/${movie.kinopoiskId}`} className={styles.link}>
          {isActiv && isLoadingImg && (
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{nameRu}</h2>
              <p className={styles.description}>{description}</p>

              <div className={styles.info}>
                {info.map((el, i) => (
                  <span key={i}>{el}</span>
                ))}
              </div>
            </div>
          )}
        </Link>
      )}
    </article>
  );
}
