import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoadingState } from './LoadingState';

describe('loadingState', () => {
  it('renders correctly with default props', () => {
    render(<LoadingState />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders custom message when provided', () => {
    render(<LoadingState message="Please wait..." />);

    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<LoadingState data-testid="loading-state" />);
    const loadingState = screen.getByTestId('loading-state');

    expect(loadingState).toHaveClass('flex');
    expect(loadingState).toHaveClass('h-32');
    expect(loadingState).toHaveClass('items-center');
    expect(loadingState).toHaveClass('justify-center');
    expect(loadingState).toHaveClass('rounded-lg');
    expect(loadingState).toHaveClass('border');
    expect(loadingState).toHaveClass('bg-white');
  });

  it('merges custom className with default classes', () => {
    render(<LoadingState className="custom-class" data-testid="loading-state" />);
    const loadingState = screen.getByTestId('loading-state');

    expect(loadingState).toHaveClass('custom-class');
    expect(loadingState).toHaveClass('flex'); // Still has default classes
  });

  it('passes additional props to the div element', () => {
    render(<LoadingState data-testid="loading-state" aria-label="Loading content" />);
    const loadingState = screen.getByTestId('loading-state');

    expect(loadingState).toHaveAttribute('aria-label', 'Loading content');
  });
});
