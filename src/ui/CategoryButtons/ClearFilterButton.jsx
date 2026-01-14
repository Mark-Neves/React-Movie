import styles from './FilterButton.module.scss';
export function ClearFilterButton({ filtersClear }) {
  return (
    <span>
      <button onClick={filtersClear} className={styles.button}>
        Очистить фильтры
      </button>
    </span>
  );
}
