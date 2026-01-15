import styles from './Favorites.module.scss';

import { EmptyFavorites } from './components/EmptyFavorites/EmptyFavorites';
import { TitleContent } from '../../components/TitleContent/TitleContent';
import { dataStorage } from '../../components/helpers/filterConfig';

export function Favorites() {
  const favorite = dataStorage.get('favorite', []);
  return (
    <>
      {favorite.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <div className={styles.container}>
          {favorite.map((el) => (
            <TitleContent key={el.id} isCompact movie={el.movie} />
          ))}
        </div>
      )}
    </>
  );
}
