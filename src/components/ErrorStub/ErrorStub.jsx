import styles from './ErrorStub.module.scss';
export function ErrorStub() {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Похоже у нас проблема...</h2>
      <p className={styles.errorDescription}>Попробуйте повторить запрос позже</p>
    </div>
  );
}
