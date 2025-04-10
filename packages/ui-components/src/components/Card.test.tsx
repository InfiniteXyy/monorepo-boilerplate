import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card, CardTitle } from './Card';

describe('card', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div data-testid="card-content">Card content</div>
      </Card>,
    );

    expect(screen.getByTestId('card-content')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('p-6');
    expect(card).toHaveClass('shadow-sm');
  });

  it('merges custom className with default classes', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Content
      </Card>,
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('custom-class');
    expect(card).toHaveClass('rounded-lg'); // Still has default classes
  });

  it('passes additional props to the div element', () => {
    render(
      <Card data-testid="card" aria-label="Card component">
        Content
      </Card>,
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveAttribute('aria-label', 'Card component');
  });
});

describe('cardTitle', () => {
  it('renders children correctly', () => {
    render(<CardTitle>Card Title</CardTitle>);

    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByText('Card Title');

    expect(title).toHaveClass('mb-4');
    expect(title).toHaveClass('text-2xl');
    expect(title).toHaveClass('font-bold');
  });

  it('merges custom className with default classes', () => {
    render(<CardTitle className="custom-class">Card Title</CardTitle>);
    const title = screen.getByText('Card Title');

    expect(title).toHaveClass('custom-class');
    expect(title).toHaveClass('text-2xl'); // Still has default classes
  });
});
