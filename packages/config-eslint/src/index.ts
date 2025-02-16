import { antfu } from '@antfu/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';
import { custom } from './configs/custom';

export function base() {
  return antfu({ stylistic: false, isInEditor: false }, prettier, custom);
}

export async function react() {
  return antfu({ stylistic: false, react: true, isInEditor: false }, prettier, custom);
}
