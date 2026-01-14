import styles from './MovieContentSub.module.scss';
export function MovieContentSub() {
  return (
    <div className={styles.movieSubContainer}>
      <h2 className={styles.movieSubTitle}>Сейчас все будет</h2>
      <p className={styles.movieSubDescription}>Уже загружаем детальную информацию</p>
    </div>
  );
}
