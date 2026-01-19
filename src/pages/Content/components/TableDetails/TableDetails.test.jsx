import { render, screen } from '@testing-library/react';
import { TableDetails } from './TableDetails';

import { describe } from 'vitest';
import { expect } from 'vitest';

describe('Еable work', () => {
  const movie = {
    year: 2026,
    countries: [{ country: 'Россия' }],
    genres: [{ genre: 'Комедия' }],
    filmLength: 120,
    ratingAgeLimits: 'age0',
  };
  const movieEmpty = {};
  const actorList = [{ title: 'Режиссер', actors: [{ nameRu: 'Mark Neves' }] }];
  const actorListEmpty = [];
  const isCompact = true;

  it('Сompact version empty', () => {
    render(<TableDetails movie={movieEmpty} actorList={actorListEmpty} isCompact={isCompact} />);
    const title = screen.queryByText(/о фильме/i);
    expect(title).not.toBeInTheDocument();

    const tableRow = screen.queryAllByRole('row');
    expect(tableRow).toHaveLength(0);
  });

  it('Сompact version', () => {
    render(<TableDetails movie={movie} actorList={actorList} isCompact={isCompact} />);
    const title = screen.queryByText(/о фильме/i);
    expect(title).not.toBeInTheDocument();

    const tableRow = screen.queryAllByRole('row');
    expect(tableRow.length).toBeGreaterThan(0);
  });

  it('Full version empty', () => {
    render(<TableDetails movie={movieEmpty} actorList={actorListEmpty} />);
    const title = screen.getByText(/о фильме/i);
    expect(title).toBeInTheDocument();

    const tableRow = screen.queryAllByRole('row');
    expect(tableRow).toHaveLength(0);
  });

  it('Full version', () => {
    render(<TableDetails movie={movie} actorList={actorList} />);
    const title = screen.getByText(/о фильме/i);
    expect(title).toBeInTheDocument();

    const tableRow = screen.queryAllByRole('row');
    expect(tableRow.length).toBeGreaterThan(0);
  });
});
