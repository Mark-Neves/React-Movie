import styles from './Header.module.scss';

import { useContext } from 'react';
import { HeaderContext } from '../helpers/GlobalContext';

import { Link } from 'react-router-dom';

export function Header() {
  const { search, setSearch, inputHeaderRef } = useContext(HeaderContext);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>ReactMovie</Link>
      </h1>
      <div className={styles.wrapperSearch}>
        <input
          className={styles.input}
          ref={inputHeaderRef}
          type='text'
          placeholder='Поиск...'
          value={search}
          onChange={handleChange}
          aria-label='Поиск фильмов'
        />
        <Link to='favorites' className={styles.favoritesButton}>
          Избранное
        </Link>
      </div>
    </header>
  );
}
