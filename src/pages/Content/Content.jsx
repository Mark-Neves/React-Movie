import styles from './Content.module.scss';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetcher } from '../../hooks/useFetcher';

import { actorFilters } from '../../components/helpers/filterConfig';

import { TitleContent } from '../../components/TitleContent/TitleContent';
import { StillsMovie } from './components/StillsMovie/StillsMovie';
import { RecommendationsMovie } from './components/RecommendationsMovie/RecommendationsMovie';
import { ViewingFrames } from './components/ViewingFrames/ViewingFrames';
import { ErrorStub } from '../../components/ErrorStub/ErrorStub';
import { MovieContentSub } from '../../components/MovieContentSub';

export function Content() {
  const { id } = useParams();

  //Получение данных о фильме
  const {
    data: movie,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = useFetcher({ url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}` });

  //Список ссылок на просмотр
  const maxNumOfLinks = 5;

  const {
    dataArr: linkList,
    isLoading: isLoadingLinkList,
    error: errorLinkList,
  } = useFetcher({
    url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/external_sources?page=1
`,
  });

  //Данные об актерах
  const {
    dataArr: actorList,
    isLoading: isLoadingActorList,
    error: errorActorList,
  } = useFetcher({
    url: `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}
  `,
  });

  //Кадры из фильма
  const cardLimited = 6;
  const {
    dataArr: stills,
    isLoading: isLoadingStills,
    error: errorStills,
  } = useFetcher({
    url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`,
  });

  //Похожие фильмы
  const {
    dataArr: similarMovies,
    isLoading: isLoadingSimilar,
    error: errorSimilar,
  } = useFetcher({
    url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars
`,
  });

  //Состояние для просмотра фотографий
  const [indexImg, setIndexImg] = useState(null);
  const openImg = (i) => {
    setIndexImg(i);
  };
  const closeImg = () => {
    setIndexImg(null);
  };

  let content;
  if (errorMovie) content = <ErrorStub />;
  else if (!movie.posterUrl) content = <MovieContentSub />;
  else
    content = (
      <div className={styles.content}>
        <TitleContent
          movie={movie}
          isLoadingMovie={isLoadingMovie}
          errorMovie={errorMovie}
          linkList={linkList.length > maxNumOfLinks ? linkList.slice(0, maxNumOfLinks) : linkList}
          isLoadingLinkList={isLoadingLinkList}
          errorLinkList={errorLinkList}
          actorList={actorFilters(actorList)}
          isLoadingActorList={isLoadingActorList}
          errorActorList={errorActorList}
        />

        <StillsMovie
          stills={stills}
          isLoadingStills={isLoadingStills}
          errorStills={errorStills}
          cardLimited={cardLimited}
          openImg={openImg}
        />
        {indexImg !== null && (
          <ViewingFrames stills={stills} indexImg={indexImg} closeImg={closeImg} />
        )}
        <RecommendationsMovie
          similarMovies={similarMovies}
          isLoadingSimilar={isLoadingSimilar}
          errorSimilar={errorSimilar}
          visibleRows={1}
        />
      </div>
    );

  return content;
}
