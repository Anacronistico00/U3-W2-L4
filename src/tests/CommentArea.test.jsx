import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BookList from '../components/BookList';
import booksJson from '../data/fantasy.json';

describe('opens the comment area if clicked on a singlebook', () => {
  it('should open the comment area when a book is clicked', () => {
    render(<BookList books={booksJson} />);
    const buttons = screen.getAllByTestId('single-book');
    fireEvent.click(buttons[0]);
    const comments = screen.getByText('Comments');
    expect(comments).toBeInTheDocument();
  });

  it('should close the comment area when a book is clicked two times', () => {
    render(<BookList books={booksJson} />);
    const buttons = screen.getAllByTestId('single-book');
    fireEvent.dblClick(buttons[0]);
    const comments = screen.queryByText('Comments');
    expect(comments).not.toBeInTheDocument();
  });
});
