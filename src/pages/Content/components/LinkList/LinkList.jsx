import { memo } from 'react';
import styles from './LinkList.module.scss';
export const LinkList = memo(function LinkList({ listItem = [] }) {
  if (!listItem.length) return null;
  return (
    <div className={styles.wrapperLink} data-testid='linkList-content'>
      <p className={styles.linkTitle}>Смотреть на:</p>
      <ul className={styles.linkList}>
        {listItem.map((el) => (
          <li className={styles.linkItem} key={el.platform}>
            <a href={el.url} target='_blank'>
              <img className={styles.linkItemImg} src={el.logoUrl} alt={`Логотип ${el.platform}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
