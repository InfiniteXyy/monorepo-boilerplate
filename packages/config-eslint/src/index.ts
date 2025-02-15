import { antfu } from '@antfu/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';

export function base() {
  return antfu({ stylistic: false }, prettier);
}

export async function react() {
  return antfu({ stylistic: false, react: true }, prettier);
}
