import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { App } from './App';

const component = (
  <QueryClientProvider client={new QueryClient()}>
    <App />
  </QueryClientProvider>
);

// Mock the API hook
vi.mock('./api/useListPosts', () => ({
  useListPosts: () => ({
    data: [
      { id: '1', title: 'Test Post 1' },
      { id: '2', title: 'Test Post 2' },
    ],
  }),
}));

describe('app', () => {
  it('renders correctly', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it('renders posts', () => {
    const { getByText } = render(component);
    expect(getByText('Test Post 1')).toBeInTheDocument();
    expect(getByText('Test Post 2')).toBeInTheDocument();
  });
});
