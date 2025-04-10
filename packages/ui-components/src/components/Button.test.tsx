import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-500'); // primary variant class
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: 'Secondary' });

    expect(button).toHaveClass('bg-gray-500');
    expect(button).not.toHaveClass('bg-blue-500');
  });

  it('merges custom className with default classes', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: 'Custom' });

    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-blue-500'); // Still has default classes
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: 'Click me' });
    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes additional props to the button element', () => {
    render(
      <Button disabled data-testid="test-button">
        Disabled
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Disabled' });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-testid', 'test-button');
  });
});
