import styles from './ViewingFrames.module.scss';

import { useState } from 'react';
import { ButtonSvg } from '../../../../ui/ButtonSvg';
import { CloseSvg } from '../../../../ui/CloseSvg';
import { useRef } from 'react';
import { useEffect } from 'react';

export function ViewingFrames({ stills, indexImg, closeImg }) {
  const [sliderIndex, setSliderIndex] = useState(indexImg);
  const viewing = useRef(null);

  const sliderPrev = () => {
    if (sliderIndex > 0) setSliderIndex((prev) => prev - 1);
  };
  const sliderNext = () => {
    if (sliderIndex < stills.length - 1) setSliderIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (indexImg === null) return;
    const closeBox = (e) => {
      if (viewing.current === e.target) {
        closeImg();
      }
    };
    document.addEventListener('click', closeBox);
    return () => {
      document.removeEventListener('click', closeBox);
    };
  }, [indexImg, closeImg]);

  return (
    <div className={styles.wrapperViewing} ref={viewing}>
      <div className={styles.viewing}>
        <button className={styles.closeButton} onClick={closeImg}>
          <CloseSvg />
        </button>
        <div className={styles.container}>
          <div className={styles.imgWrapper}>
            {sliderIndex > 0 && (
              <button className={`${styles.button} ${styles.buttonPrev}`} onClick={sliderPrev}>
                <ButtonSvg />
              </button>
            )}
            {sliderIndex < stills.length - 1 && (
              <button className={`${styles.button} ${styles.buttonNext}`} onClick={sliderNext}>
                <ButtonSvg />
              </button>
            )}

            <div className={styles.wrapperSliderBig}>
              <div
                className={styles.sliderBig}
                style={{
                  transform: `translateX(calc(-${sliderIndex} * (var(--card-width-Img-big) + var(--gap-Img-big))))`,
                }}
              >
                {stills.map((el) => (
                  <img
                    key={el.imageUrl}
                    src={el.imageUrl}
                    alt='Кадры из фильма'
                    className={styles.imgSliderBig}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.wrapperSlider}>
            <div
              className={styles.slider}
              style={{
                transform: `translateX(calc(-${Math.max(
                  sliderIndex - 4,
                  0,
                )} * (var(--card-width-Img) + var(--gap-Img))))`,
              }}
            >
              {stills.map((el, i) => (
                <img
                  key={el.imageUrl}
                  src={el.imageUrl}
                  alt='Кадры из фильма'
                  className={`${styles.imgSlider} ${
                    i === sliderIndex ? styles.activeImgSlider : null
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
