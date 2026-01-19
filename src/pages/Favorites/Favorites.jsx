import styles from './Favorites.module.scss';

import { useContext } from 'react';
import { FavoritesContext } from '../../components/helpers/GlobalContext';

import { EmptyFavorites } from './components/EmptyFavorites/EmptyFavorites';
import { TitleContent } from '../../components/TitleContent/TitleContent';

export function Favorites() {
  const { favoritesList } = useContext(FavoritesContext);

  let content;
  if (favoritesList.length === 0) content = <EmptyFavorites />;
  else
    content = (
      <div className={styles.container}>
        {favoritesList.map((el) => (
          <TitleContent key={el.id} isCompact movie={el.movie} />
        ))}
      </div>
    );

  return content;
}
