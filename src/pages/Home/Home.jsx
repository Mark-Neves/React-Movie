import { Premiers } from './components/Premiers/Premiers';
import { PopularSection } from './components/PopularSection/PopularSection';
import { CategorySection } from './components/CategorySection/CategorySection';

export function Home() {
  return (
    <>
      <Premiers />
      <PopularSection isCompact visibleRows={2} />
      <CategorySection isCompact visibleRows={1} />
    </>
  );
}
