import styles from './EmptyFavorites.module.scss';
export function EmptyFavorites() {
  return (
    <div className={styles.emptyContainer}>
      <h2 className={styles.emptyTitle}>В избранном пусто</h2>
      <p className={styles.emptyDescription}>Добавляйте фильмы для формирования своего спискa</p>
    </div>
  );
}
