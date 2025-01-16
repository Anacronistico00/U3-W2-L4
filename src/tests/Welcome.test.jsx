import { describe, expect, it } from 'vitest';
import Welcome from '../components/Welcome';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Welcome behaviour', () => {
  it('mounts the component Welcome correctly', () => {
    render(<Welcome />);
    const modalTitle = screen.getByText('Welcome!');
    expect(modalTitle).toBeInTheDocument();
  });
});

describe('testing button interaction', () => {
  it('should close modal after button click', () => {
    render(<Welcome />);
    const button = screen.getByText(/close/i);
    fireEvent.click(button);
    const modalTitle = screen.queryByText('Welcome!');
    expect(modalTitle).not.toBeInTheDocument();
  });
});
