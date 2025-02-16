import { describe, expect, it } from 'vitest';
import { uniqBy } from './index';

describe('uniqBy', () => {
  it('should remove duplicates based on specified key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Charlie' },
    ];

    const result = uniqBy(input, 'id');

    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });

  it('should handle empty array', () => {
    const input: Array<{ id: number }> = [];
    const result = uniqBy(input, 'id');
    expect(result).toEqual([]);
  });

  it('should handle array with no duplicates', () => {
    const input = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ];

    const result = uniqBy(input, 'id');

    expect(result).toEqual(input);
  });
});
