import styles from './StillsMovie.module.scss';
import { Skeleton } from './Skeleton';

export function StillsMovie({ stills, isLoadingStills, cardLimited, openImg }) {
  return (
    <>
      {stills.length ? (
        <div className={styles.stillsContainer}>
          <span className={styles.titleStills}>Кадры из фильма</span>
          <div>
            <div className={styles.wrapperStills}>
              {isLoadingStills
                ? [...Array(cardLimited)].map((_, i) => <Skeleton key={i} />)
                : stills
                    .slice(0, cardLimited)
                    .map((still, i) => (
                      <img
                        key={still.imageUrl}
                        className={styles.stills}
                        src={still.imageUrl}
                        alt='Кадры из фильма'
                        loading='lazy'
                        onClick={() => openImg(i)}
                      />
                    ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
