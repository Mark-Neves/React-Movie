import styles from './TitleContent.module.scss';

import { useContext } from 'react';
import { FavoritesContext } from '../helpers/GlobalContext';

import { Link } from 'react-router-dom';
import { LinkList } from '../../pages/Content/components/LinkList/LinkList';
import { MovieRating } from '../../pages/Content/components/ MovieRating/MovieRating';
import { FavoriteButton } from '../../ui/FavoriteButton/FavoriteButton';
import { TableDetails } from '../../pages/Content/components/TableDetails/TableDetails';

import { favoritesItem } from '../helpers/filterConfig';

export function TitleContent({ movie, linkList, actorList, isCompact = false }) {
  const { kinopoiskId, filmId, posterUrl, nameRu, description } = movie;
  const id = kinopoiskId ?? filmId;

  const { isFavorite, updateFavoritesList } = useContext(FavoritesContext);

  const favorite = isFavorite(id);
  const updateFavorite = () => {
    updateFavoritesList(id, favoritesItem(id, movie, actorList));
  };

  const wrapper = isCompact ? styles.favoriteWrapper : styles.wrapper;
  const poster = isCompact ? styles.favoritePoster : styles.poster;
  const title = isCompact ? styles.favoriteTitle : styles.title;
  const contentDescription = isCompact ? styles.faworiteDescription : styles.contentDescription;

  return (
    <div className={wrapper} data-testid='title-content'>
      <div className={styles.wrapperPoster}>
        <Link to={`/content/${id}`}>
          <img src={posterUrl} alt={`Постер ${nameRu}`} className={poster} loading='lazy' />
        </Link>
        <LinkList listItem={linkList} />
      </div>
      <div className={styles.wrapperContent}>
        <div className={styles.wrapperTitle}>
          <div className={styles.contentTitle}>
            <h2 className={title}>
              <Link to={`/content/${id}`}>{nameRu}</Link>
            </h2>
            <FavoriteButton isFavorite={favorite} onClick={updateFavorite} isCompact={isCompact} />
          </div>
          <MovieRating movie={movie} isCompact={isCompact} />
        </div>
        <p className={contentDescription}>{description}</p>
        <TableDetails movie={movie} actorList={actorList} isCompact={isCompact} />
      </div>
    </div>
  );
}
