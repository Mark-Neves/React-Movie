import styles from './Favorites.module.scss';

import { EmptyFavorites } from './components/EmptyFavorites/EmptyFavorites';
import { TitleContent } from '../../components/TitleContent/TitleContent';

export function Favorites() {
  const dataStorage = JSON.parse(localStorage.getItem('favorite') || '[]');
  console.log(localStorage);
  return (
    <>
      {dataStorage.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <div className={styles.container}>
          {dataStorage.map((el) => (
            <TitleContent key={el.id} isCompact movie={el.movie} />
          ))}
        </div>
      )}
    </>
  );
}
