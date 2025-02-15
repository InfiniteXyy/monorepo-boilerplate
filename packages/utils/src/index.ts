/**
 * Uniq array by element key
 * @returns new array
 */
export const uniqBy = <T>(arr: T[], key: keyof T) => {
  const seen = new Set();
  return arr.filter((item) => {
    const val = item[key];
    if (seen.has(val)) return false;
    seen.add(val);
    return true;
  });
};
