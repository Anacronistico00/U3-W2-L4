import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BookList from '../components/BookList';
import booksJson from '../data/fantasy.json';

describe('Verifying if the number of single books is equal to the list in the Json file', () => {
  it('should render as single books as the json list length', () => {
    render(<BookList books={booksJson} />);
    const singleBooks = screen.getAllByTestId('single-book');
    expect(booksJson.length).toBe(singleBooks.length);
  });
});
