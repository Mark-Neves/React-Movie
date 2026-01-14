import { memo } from 'react';
import { ButtonSvg } from '../ButtonSvg';
import styles from './FilterButton.module.scss';

export const FilterButton = memo(function FilterButton({
  value,
  activeFilter,
  isActive,
  toggleFilter,
}) {
  return (
    <button
      onClick={() => toggleFilter(activeFilter)}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
    >
      {value}
      <span className={styles.buttonImg}>
        <ButtonSvg />
      </span>
    </button>
  );
});
