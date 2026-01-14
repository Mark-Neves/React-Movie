import ContentLoader from 'react-content-loader';

export const SkeletonImg = () => (
  <ContentLoader
    speed={2}
    width='100%'
    height='80%'
    viewBox='0 0 270 364'
    backgroundColor='#4f4f4f'
    foregroundColor='#ff3d81'
  >
    <rect x='0' y='0' rx='10' ry='10' width='269' height='364' />
  </ContentLoader>
);
