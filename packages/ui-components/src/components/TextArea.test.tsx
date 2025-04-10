import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TextArea } from './TextArea';

describe('textArea', () => {
  it('renders correctly with default props', () => {
    render(<TextArea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');

    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('applies default classes', () => {
    render(<TextArea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');

    expect(textarea).toHaveClass('w-full');
    expect(textarea).toHaveClass('rounded-lg');
    expect(textarea).toHaveClass('border');
    expect(textarea).toHaveClass('p-2');
    expect(textarea).toHaveClass('outline-none');
    expect(textarea).toHaveClass('focus:border-blue-500');
  });

  it('merges custom className with default classes', () => {
    render(<TextArea className="custom-class" data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');

    expect(textarea).toHaveClass('custom-class');
    expect(textarea).toHaveClass('w-full'); // Still has default classes
  });

  it('uses default rows value of 4', () => {
    render(<TextArea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');

    expect(textarea).toHaveAttribute('rows', '4');
  });

  it('allows overriding the rows value', () => {
    render(<TextArea rows={8} data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');

    expect(textarea).toHaveAttribute('rows', '8');
  });

  it('passes additional props to the textarea element', () => {
    render(<TextArea data-testid="test-textarea" placeholder="Enter text" required />);
    const textarea = screen.getByTestId('test-textarea');

    expect(textarea).toHaveAttribute('placeholder', 'Enter text');
    expect(textarea).toBeRequired();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    render(<TextArea data-testid="test-textarea" />);

    const textarea = screen.getByTestId('test-textarea');
    await user.type(textarea, 'Hello, world!');

    expect(textarea).toHaveValue('Hello, world!');
  });
});
