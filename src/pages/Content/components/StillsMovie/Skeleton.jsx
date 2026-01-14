import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width='100%'
    height='100%'
    viewBox='0 0 430 420'
    backgroundColor='#6a6868'
    foregroundColor='#ff3d81'
  >
    <rect x='0' y='0' rx='10' ry='10' width='430' height='420' />
  </ContentLoader>
);
