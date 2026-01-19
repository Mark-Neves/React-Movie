import { PopularContext } from '../../components/helpers/GlobalContext';
import styles from './SelectCollectionButton.module.scss';

import { useContext } from 'react';

export function SelectCollectionButton({ element, index }) {
  const { handleCollection, activeCollection } = useContext(PopularContext);

  return (
    <button
      data-testid='popular-button'
      className={`${styles.typeCollection} ${activeCollection === index ? styles.active : ''}`}
      onClick={() => handleCollection(index)}
    >
      Популярные {element?.label}
    </button>
  );
}
