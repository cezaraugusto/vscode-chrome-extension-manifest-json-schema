import auditor from 'eslint-config-auditor'
import stylistic from 'eslint-config-auditor/stylistic'

export default [
  {ignores: ['dist/**', 'build/**', 'out/**', 'coverage/**', '**/__fixtures__/**', '**/fixtures/**', '**/__mocks__/**', '**/__snapshots__/**', '**/*.min.js', '**/vendor/**', '**/*.json', 'eslint.config.mjs']},
  ...auditor,
  ...stylistic,
]
