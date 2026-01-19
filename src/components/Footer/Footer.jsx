import styles from './Footer.module.scss';
import { scrollTo } from '../helpers/filterConfig';

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>
        <Link to='/' onClick={scrollTo}>
          ReactMovie
        </Link>
      </h2>
      <nav className={styles.navigation} aria-label='Навигация по странице'>
        <Link to='/' onClick={scrollTo}>
          Главная
        </Link>
        <Link to='/search?type=popular' onClick={scrollTo}>
          Топовые коллекции
        </Link>
      </nav>
    </footer>
  );
}
