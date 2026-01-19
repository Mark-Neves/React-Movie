import ContentLoader from 'react-content-loader';

export const PremiersItemSkeleton = () => (
  <ContentLoader
    speed={2}
    width={489}
    height={709}
    viewBox='0 0 489 709'
    backgroundColor='#4f4f4f'
    foregroundColor='var( --color-accent)'
  >
    <rect x='0' y='0' rx='10' ry='10' width='489' height='709' />
  </ContentLoader>
);
