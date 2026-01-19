import { render, screen } from '@testing-library/react';
import { MovieRating } from './MovieRating';
import { describe } from 'vitest';
import { expect } from 'vitest';

describe('MovieRating components', () => {
  const movie = { ratingKinopoisk: 9, ratingImdb: 7 };

  const movieEmpty = {};
  const isCompact = true;

  it('Reder compact movieRating empty', () => {
    render(<MovieRating movie={movieEmpty} isCompact={isCompact} />);
    const textContent = screen.queryAllByText(/\/10/);
    expect(textContent).toHaveLength(0);
  });

  it('Reder compact full movieRating', () => {
    const { ratingKinopoisk, ratingImdb } = movie;

    render(<MovieRating movie={movie} isCompact={isCompact} />);
    const textContent = screen.queryAllByText(/\/10/);

    textContent.forEach((textElement) => {
      expect(textElement).toBeInTheDocument();
    });

    const kinopoisk = screen.getByText(`Кинопоиск ${ratingKinopoisk}/10`);
    expect(kinopoisk).toBeInTheDocument();

    const IMDb = screen.getByText(`IMDb ${ratingImdb}/10`);
    expect(IMDb).toBeInTheDocument();

    const parentElement = screen.getByText(`Кинопоиск ${ratingKinopoisk}/10`).parentElement;
    expect(parentElement).toHaveClass(/wrapperRatingFavorite/i);
  });

  it('Render movieRating', () => {
    const { ratingKinopoisk } = movie;

    render(<MovieRating movie={movie} />);
    const parentElement = screen.getByText(`Кинопоиск ${ratingKinopoisk}/10`).parentElement;
    expect(parentElement).toHaveClass(/wrapperRating/i);
  });
});
