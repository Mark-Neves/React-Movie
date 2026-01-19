import ContentLoader from 'react-content-loader';
import styles from './Skeleton.module.scss';

export const Skeleton = () => (
  <div className={styles.skeletonWrapper}>
    <ContentLoader
      speed={2}
      width='clamp(12.5rem, 10.3007rem + 6.3177vw, 16.875rem)'
      height='clamp(21.875rem, 18.1047rem + 10.8303vw, 29.375rem)'
      viewBox='0 0 270 470'
      backgroundColor='#4f4f4f'
      foregroundColor='var( --color-accent)'
    >
      <rect x='0' y='0' rx='10' ry='10' width='269' height='374' />
      <rect x='0' y='387' rx='10' ry='10' width='269' height='20' />
      <rect x='0' y='418' rx='10' ry='10' width='269' height='20' />
    </ContentLoader>
  </div>
);
