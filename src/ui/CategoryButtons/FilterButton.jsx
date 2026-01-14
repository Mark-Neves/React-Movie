import { memo } from 'react';
import { ButtonSvg } from '../ButtonSvg';
import styles from './FilterButton.module.scss';

export const FilterButton = memo(function FilterButton({
  value,
  activeFilter,
  isActive,
  toggleFilter,
}) {
  const updateFilter = () => {
    toggleFilter(activeFilter);
  };
  return (
    <button onClick={updateFilter} className={`${styles.button} ${isActive ? styles.active : ''}`}>
      {value}
      <span className={styles.buttonImg}>
        <ButtonSvg />
      </span>
    </button>
  );
});
