import { fireEvent, render, screen } from '@testing-library/react';
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

describe('verify che correct filtering of the input field', () => {
  it('should show less books after searching in the search bar', () => {
    render(<BookList books={booksJson} />);
    const allTheBooks = screen.getAllByTestId('single-book');
    const searchBar = screen.getByPlaceholderText('Search for a Book...');
    fireEvent.change(searchBar, { target: { value: 'k' } });
    const filteredBooks = screen.getAllByTestId('single-book');
    expect(filteredBooks.length).toBeLessThan(allTheBooks.length);
  });
  it("shouldn't show books if the name doesn't match the filtering", () => {
    render(<BookList books={booksJson} />);
    const allTheBooks = screen.getAllByTestId('single-book');
    const searchBar = screen.getByPlaceholderText('Search for a Book...');
    fireEvent.change(searchBar, { target: { value: 'geralt' } });
    const filteredBooks = screen.queryAllByTestId('single-book');
    expect(filteredBooks.length).toBeLessThan(allTheBooks.length);
  });
});

describe('Verify that upon page load there are no instances of singleBook in the DOM', () => {
  it("sould not show comments if any book isn't clicked", () => {
    render(<BookList books={booksJson} />);
    const comments = screen.queryByText('Comments');
    expect(comments).not.toBeInTheDocument();
  });
});

describe('verify if comments are shown if clicked on a book', () => {
  it('should show comments if clicked on a book that contains them', async () => {
    render(<BookList books={booksJson} />);
    const aBook = screen.getAllByTestId('single-book');
    fireEvent.click(aBook[0]);
    const firstComment = await screen.findAllByTestId('single-comment');
    expect(firstComment[0]).toBeInTheDocument();
  });
});
