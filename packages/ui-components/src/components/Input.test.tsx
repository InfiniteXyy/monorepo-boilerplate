import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('input', () => {
  it('renders correctly with default props', () => {
    render(<Input data-testid="test-input" />);
    const input = screen.getByTestId('test-input');

    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('applies default classes', () => {
    render(<Input data-testid="test-input" />);
    const input = screen.getByTestId('test-input');

    expect(input).toHaveClass('w-full');
    expect(input).toHaveClass('rounded-lg');
    expect(input).toHaveClass('border');
    expect(input).toHaveClass('p-2');
    expect(input).toHaveClass('outline-none');
    expect(input).toHaveClass('focus:border-blue-500');
  });

  it('merges custom className with default classes', () => {
    render(<Input className="custom-class" data-testid="test-input" />);
    const input = screen.getByTestId('test-input');

    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('w-full'); // Still has default classes
  });

  it('passes additional props to the input element', () => {
    render(<Input data-testid="test-input" placeholder="Enter text" type="email" required />);
    const input = screen.getByTestId('test-input');

    expect(input).toHaveAttribute('placeholder', 'Enter text');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toBeRequired();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    render(<Input data-testid="test-input" />);

    const input = screen.getByTestId('test-input');
    await user.type(input, 'Hello, world!');

    expect(input).toHaveValue('Hello, world!');
  });
});
