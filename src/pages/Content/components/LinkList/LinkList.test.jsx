import { render, screen } from '@testing-library/react';
import { LinkList } from './LinkList';
import { describe } from 'vitest';
import { expect } from 'vitest';

describe('Render LinkList components', () => {
  const listItem = [{ url: 'testUrl' }];
  it('Empty LinkList', () => {
    render(<LinkList />);
    const linkList = screen.queryByTestId('linkList-content');
    expect(linkList).not.toBeInTheDocument();
  });

  it('Full LinkList', () => {
    render(<LinkList listItem={listItem} />);

    const linkList = screen.getByTestId('linkList-content');
    expect(linkList).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(listItem.length);

    links.forEach((link, i) => {
      expect(link).toHaveAttribute('href', listItem[i].url);
    });
  });
});
