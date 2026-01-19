import styles from './FavoriteButton.module.scss';

export function FavoriteButton({ isFavorite, onClick, isCompact }) {
  const addButton = isCompact ? styles.addButtonFavorite : styles.addButton;

  return (
    <button className={`${addButton} ${isFavorite ? styles.active : ''}`} onClick={onClick}>
      {isFavorite ? 'Добавлен' : 'В избранное'}
    </button>
  );
}
