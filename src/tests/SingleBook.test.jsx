import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BookList from '../components/BookList';
import booksJson from '../data/fantasy.json';

describe('book selection or deselection changes the border color', () => {
  it('should show a red border if clicked', () => {
    render(<BookList books={booksJson} />);
    const aBook = screen.getAllByTestId('single-book')[0];
    fireEvent.click(aBook);
    expect(aBook).toHaveStyle('border: 1px solid red');
  });

  it('should remove red border when clicking on another book', () => {
    render(<BookList books={booksJson} />);
    const aBook = screen.getAllByTestId('single-book')[0];
    const anotherBook = screen.getAllByTestId('single-book')[1];
    fireEvent.click(aBook);
    expect(aBook).toHaveStyle('border: 1px solid red');
    fireEvent.click(anotherBook);
    expect(aBook).toHaveStyle('border: none');
    expect(anotherBook).toHaveStyle('border: 1px solid red');
  });

  it('should remove red border if clicked two times', () => {
    render(<BookList books={booksJson} />);
    const aBook = screen.getAllByTestId('single-book')[0];
    fireEvent.dblClick(aBook);
    expect(aBook).toHaveStyle('border: none');
  });
});
