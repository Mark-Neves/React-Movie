import ContentLoader from 'react-content-loader';
import styles from './SkeletonPremiers.module.scss';

export const SkeletonPremiers = () => (
  <ContentLoader
    className={styles.skeleton}
    speed={2}
    viewBox='0 0 490 690'
    backgroundColor='#4f4f4f'
    foregroundColor='var( --color-accent)'
  >
    <rect x='0' y='0' rx='15' ry='15' width='100%' height='100%' />
  </ContentLoader>
);
