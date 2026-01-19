import styles from './PopularSectionBar.module.scss';

import { SelectCollectionButton } from '../../ui/SelectCollectionButton/SelectCollectionButton';
import { collections } from '../helpers/filterConfig';

export function PopularSectionBar() {
  return (
    <div className={styles.typeWrapper}>
      {collections.map((el, i) => (
        <SelectCollectionButton key={i} element={el} index={i} />
      ))}
    </div>
  );
}
