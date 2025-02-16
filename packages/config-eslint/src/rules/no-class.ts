import { ESLintUtils } from '@typescript-eslint/utils';

export default ESLintUtils.RuleCreator(() => '')({
  name: 'no-class',
  meta: {
    type: 'problem',
    docs: { description: 'Disallow class declarations' },
    schema: [],
    messages: { noClass: 'Should always use functional programming' },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      ClassDeclaration(node) {
        context.report({ node, messageId: 'noClass' });
      },
    };
  },
});
