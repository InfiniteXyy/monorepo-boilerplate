import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import rules from '../rules';

export const custom: TypedFlatConfigItem = {
  plugins: { custom: { rules } },
  rules: {
    'custom/no-class': 'error',
  },
};
