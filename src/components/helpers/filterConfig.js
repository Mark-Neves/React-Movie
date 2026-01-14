export const debaunce = (func, delay) => {
  let timer;
  const debaunceFunc = (...args) => {
    clearTimeout(timer);
    return setTimeout(() => func(...args), delay);
  };
  debaunceFunc.clear = () => clearTimeout(timer);
  return debaunceFunc;
};

export const collections = [
  { label: 'Фильмы', type: 'TOP_250_MOVIES' },
  { label: 'Сериалы', type: 'POPULAR_SERIES' },
  { label: 'Мультфильмы', type: 'KIDS_ANIMATION_THEME' },
];

export const defoltFilter = {
  sortCollectionFilter: {
    type: 'Сортировать',
    label: 'Сортировать',
    mode: 'sort',
    id: 'NUM_VOTE',
  },
  typeCollection: { type: 'Все', label: 'Все', mode: 'filter', id: '' },
  category: { type: 'Жанр', label: 'Жанр', mode: 'filter', id: '' },
  countries: { type: 'Страны', label: 'Страны', mode: 'filter', id: '' },
  year: { type: 'Год выхода', label: 'Год выхода', mode: 'filter', id: { from: '', to: '' } },
  rating: { type: 'Рейтинг', label: 'Рейтинг', mode: 'filter', id: '' },
};

export const sortCollectionFilter = [
  { label: 'По рейтингу', id: 'RATING' },
  { label: 'По количеству голосов', id: 'NUM_VOTE' },
  { label: 'По новизне', id: 'YEAR' },
];

export const typeCollectionFilter = [
  { label: 'Все', id: 'ALL' },
  { label: 'Фильмы', id: 'FILM' },
  { label: 'Сериалы', id: 'TV_SERIES' },
];

export const countriesFilter = [
  'США',
  'Франция',
  'Испания',
  'Италия',
  'Япония',
  'СССР',
  'Россия',
  'Турция',
];

const currentYear = new Date().getFullYear();

export const yearFilter = [
  { label: `${currentYear} - 2019`, id: { from: 2019, to: currentYear } },
  { label: '2019', id: { from: 2019, to: 2019 } },
  { label: '2018', id: { from: 2018, to: 2018 } },
  { label: '2017', id: { from: 2017, to: 2017 } },
  { label: '2016-2010', id: { from: 2010, to: 2016 } },
  { label: '2000-e', id: { from: 2000, to: 2009 } },
  { label: '1990-e', id: { from: 1990, to: 1999 } },
  { label: 'Классика', id: { from: 1888, to: 1989 } },
];

export const getDropdownData = (openFilter, filterValue) => {
  switch (openFilter) {
    case 'sortCollectionFilter':
      return sortCollectionFilter;
    case 'typeCollection':
      return typeCollectionFilter;
    case 'category':
      return filterValue?.genres
        ? filterValue.genres
            .filter((el) => el.genre !== '')
            .map((value) => ({
              id: value.id,
              label: value.genre,
            }))
            .sort((a, b) => a.label.localeCompare(b.label, 'ru'))
        : [];
    case 'countries':
      return filterValue?.countries
        .filter((el) => countriesFilter.includes(el.country))
        .map((value) => ({
          id: value.id,
          label: value.country,
        }))
        .sort((a, b) => a.label.localeCompare(b.label, 'ru'));
    case 'year':
      return yearFilter;
    case 'rating':
      return [...Array(5)].map((_, i) => ({
        id: i === 0 ? `${i}` : `${10 - i}`,
        label: `${i === 0 ? 'Любой рейтинг' : `Рейтинг выше ${10 - i}`}`,
      }));
    default:
      return [];
  }
};

export const dateTable = (movie) => {
  const { year, countries = [], genres = [], filmLength, ratingAgeLimits, slogan = '' } = movie;
  return [
    { title: 'Слоган', description: slogan?.replaceAll(/[^а-я]/gi, '') ? `${slogan}` : '-' },
    { title: 'Дата выхода', description: year ? `${year}` : '-' },
    {
      title: 'Страна',
      description: countries.length ? `${countries.map((el) => el.country).join(', ')}` : '-',
    },
    {
      title: 'Жанр',
      description: genres.length ? `${genres.map((el) => el.genre).join(', ')}` : '-',
    },
    { title: 'Время', description: filmLength ? `${filmLength} мин` : '-' },
    { title: 'Возраст', description: ratingAgeLimits ? `${ratingAgeLimits.slice(3)}+` : '-' },
  ];
};

export const actorFilters = (actorList = []) => {
  const actorFilterList = actorList.filter((el) => el.nameRu !== '');
  const directors = actorFilterList.filter((actor) => actor.professionText === 'Режиссеры');
  const producer = actorFilterList.filter((actor) => actor.professionText === 'Продюсеры');
  const actors = actorFilterList.filter((actor) => actor.professionText === 'Актеры');

  return [
    {
      title: directors.length > 1 ? 'Режиссеры' : 'Режиссер',
      actors: directors,
    },
    {
      title: 'В главных ролях',
      actors: actors.slice(0, 10),
    },
    {
      title: producer.length > 1 ? 'Продюсеры' : 'Продюсер',
      actors: producer.slice(0, 3),
    },
  ];
};

export const favoritesItem = (id, movie, actorList) => {
  return { id: id, movie: movie, actorList: actorList };
};

export const scrollTo = () => {
  window.scrollTo({ top: 0 });
};
