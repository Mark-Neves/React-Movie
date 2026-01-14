import styles from './Pagination.module.scss';
import { ButtonSvg } from '../../ui/ButtonSvg';

export function Pagination({ count, previousValue, nextValue, limit }) {
  return (
    <div className={styles.wrapperPagination}>
      <button className={`${styles.button} ${styles.buttonPrev}`} onClick={previousValue}>
        <ButtonSvg className={styles.svg} />
      </button>
      <span className={styles.contentPagination}>{`${count} / ${limit}`}</span>
      <button onClick={nextValue} className={`${styles.button} ${styles.buttonNext}`}>
        <ButtonSvg className={styles.svg} />
      </button>
    </div>
  );
}
