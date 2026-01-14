import styles from './Premiers.module.scss';

import { useState } from 'react';

import { PremiersItem } from '../PremiersItem/PremiersItem';
import { ButtonSvg } from '../../../../ui/ButtonSvg';
import { typeCollectionFilter } from '../../../../components/helpers/filterConfig';
import { SkeletonPremiers } from './SkeletonPremiers';
import { ErrorStub } from '../../../../components/ErrorStub/ErrorStub';
import { useContext } from 'react';
import { PremiersContext } from '../../../../components/helpers/GlobalContext';

export function Premiers() {
  const { premierMovies, errorPremierMovies } = useContext(PremiersContext);

  const [sliderIndex, setSliderIndex] = useState(0);
  const prevClick = () => {
    setSliderIndex((prev) => prev - 1);
  };
  const nextClick = () => {
    setSliderIndex((prev) => prev + 1);
  };

  let content;
  if (errorPremierMovies) content = <ErrorStub />;
  else
    content = (
      <>
        {sliderIndex > 0 && (
          <button className={`${styles.button} ${styles.buttonPrev}`} onClick={prevClick}>
            <ButtonSvg />
          </button>
        )}
        {sliderIndex < premierMovies.length - 3 && (
          <button className={`${styles.button} ${styles.buttonNext}`} onClick={nextClick}>
            <ButtonSvg />
          </button>
        )}

        <div className={styles.container}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(calc(-${sliderIndex} * (var(--card-width) + var(--gap))))`,
            }}
          >
            {premierMovies.length === 0
              ? [...new Array(6)].map((_, i) => (
                  <SkeletonPremiers key={i} className={styles.skeliton} />
                ))
              : premierMovies.map((movie) => (
                  <PremiersItem
                    className={styles.content}
                    key={movie.kinopoiskId}
                    movie={movie}
                    info={[
                      movie.year,
                      movie.genres?.[0]?.genre,
                      typeCollectionFilter
                        .find((el) => el.id === movie.type)
                        ?.label.slice(0, -1)
                        .toLowerCase() || '',
                      movie.ratingAgeLimits ? `${movie.ratingAgeLimits.slice(3)}+` : null,
                    ]}
                  />
                ))}
          </div>
        </div>
      </>
    );

  return <div className={styles.wrapper}>{content}</div>;
}
