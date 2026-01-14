import styles from './PopularSection.module.scss';

import { useContext } from 'react';
import { PopularContext } from '../../../../components/helpers/GlobalContext';

import { PopularSectionBar } from '../../../../components/PopularSectionBar/PopularSectionBar';
import { SectionCard } from '../../../../components/SectionCard/SectionCard';
import { ErrorStub } from '../../../../components/ErrorStub/ErrorStub';
import { useEffect } from 'react';

export function PopularSection({ cardLimited, isCompact, visibleRows }) {
  const type = 'popular';

  const { topMovies, errorTop, setPagePopular } = useContext(PopularContext);
  useEffect(() => {
    setPagePopular(1);
  }, []);

  let content;
  if (errorTop) content = <ErrorStub />;
  else
    content = (
      <SectionCard
        cardLimited={cardLimited}
        movies={topMovies}
        type={type}
        isCompact={isCompact}
        rows={visibleRows}
      />
    );

  return (
    <section className={styles.section}>
      <PopularSectionBar />
      {content}
    </section>
  );
}
