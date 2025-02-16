import { antfu } from '@antfu/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';

export function base() {
  return antfu({ stylistic: false, isInEditor: false }, prettier);
}

export async function react() {
  return antfu({ stylistic: false, react: true, isInEditor: false }, prettier);
}
