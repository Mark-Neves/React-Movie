import styles from './TitleContent.module.scss';

import { Link } from 'react-router-dom';

import { favoritesItem } from '../helpers/filterConfig';

import { TableDetails } from '../../pages/Content/components/TableDetails/TableDetails';
import { useState } from 'react';
import { useEffect } from 'react';

export function TitleContent({ movie, linkList, actorList, isCompact = false }) {
  const { kinopoiskId, filmId, posterUrl, nameRu, description } = movie;

  const storage = JSON.parse(localStorage.getItem('favorite'));
  const [favoritesList, setFavoritesList] = useState(storage ? [...storage] : []);

  const isFavorite = (id) => {
    return favoritesList.some((el) => el.id === id);
  };

  const addFavoritesList = (obj) => {
    setFavoritesList((prev) => [...prev, obj]);
  };
  const deleteFavoritesList = (id) => {
    setFavoritesList((prev) => prev.filter((el) => el.id !== id));
  };
  const updateFavoritesList = (id, obj) => {
    isFavorite(id) ? deleteFavoritesList(id) : addFavoritesList(obj);
  };

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favoritesList));
  }, [favoritesList]);

  const id = kinopoiskId ?? filmId;
  const favorite = isFavorite(id);

  const wrapper = isCompact ? styles.faworiteWrapper : styles.wrapper;
  const poster = isCompact ? styles.faworitePoster : styles.poster;
  const title = isCompact ? styles.faworiteTitle : styles.title;
  const addButton = isCompact ? styles.addButtonFavorite : styles.addButton;
  const wrapperRating = isCompact ? styles.wrapperRatingFavorite : styles.wrapperRating;
  const contentDescription = isCompact ? styles.faworiteDescription : styles.contentDescription;

  return (
    <div className={wrapper}>
      <div className={styles.wrapperPoster}>
        <Link to={`/content/${id}`}>
          <img src={posterUrl} alt={`Постер ${nameRu}`} className={poster} loading='lazy' />
        </Link>

        {linkList && linkList.length ? (
          <div className={styles.wrapperLink}>
            <p className={styles.linkTitle}>Смотреть на:</p>
            <ul className={styles.linkList}>
              {linkList.map((el) => (
                <li className={styles.linkItem} key={el.platform}>
                  <a href={el.url} target='_blank'>
                    <img
                      className={styles.linkItemImg}
                      src={el.logoUrl}
                      alt={`Логотип ${el.platform}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className={styles.wrapperContent}>
        <div className={styles.wrapperTitle}>
          <div className={styles.contentTitle}>
            <h2 className={title}>
              <Link to={`/content/${id}`}>{nameRu}</Link>
            </h2>

            <button
              className={`${addButton} ${favorite && styles.active}`}
              onClick={() => updateFavoritesList(id, favoritesItem(id, movie, actorList))}
            >
              {favorite ? 'Добавлен' : 'В избранное'}
            </button>
          </div>
          {(movie.ratingKinopoisk || movie.ratingImdb) && (
            <div className={wrapperRating}>
              {movie.ratingKinopoisk && (
                <p className={styles.rating}>Кинопоиск {movie.ratingKinopoisk}/10</p>
              )}
              {movie.ratingImdb && <p className={styles.rating}>IMDb {movie.ratingImdb}/10</p>}
            </div>
          )}
        </div>

        <p className={contentDescription}>{description}</p>
        <TableDetails movie={movie} actorList={actorList} isCompact={isCompact} />
      </div>
    </div>
  );
}
