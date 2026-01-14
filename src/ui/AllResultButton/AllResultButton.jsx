import { Link } from 'react-router-dom';
import { scrollTo } from '../../components/helpers/filterConfig';

import styles from './AllResultButton.module.scss';
import { ButtonSvg } from '../ButtonSvg';
import { memo } from 'react';
export const AllResultButton = memo(function AllResultButton({ type, query = '' }) {
  return (
    <Link
      className={styles.link}
      to={`/search?type=${type}&query=${query}`}
      aria-label='Посмотреть все результаты'
      onClick={scrollTo}
    >
      Смотреть все
      <span className={styles.button}>
        <ButtonSvg />
      </span>
    </Link>
  );
});
