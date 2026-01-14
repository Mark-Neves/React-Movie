import styles from './PopularSectionBar.module.scss';

import { SelectCollectionButton } from '../../ui/SelectCollectionButton/SelectCollectionButton';
import { collections } from '../helpers/filterConfig';
import { useContext } from 'react';
import { PopularContext } from '../helpers/GlobalContext';

export function PopularSectionBar() {
  const { handleCollection, activeCollection } = useContext(PopularContext);

  return (
    <div className={styles.typeWrapper}>
      {collections.map((el, i) => (
        <SelectCollectionButton
          key={i}
          element={el}
          index={i}
          active={activeCollection}
          handleCollection={handleCollection}
        />
      ))}
    </div>
  );
}
