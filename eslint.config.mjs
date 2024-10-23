import {fixupConfigRules, fixupPluginRules} from '@eslint/compat';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'plugin:eslint-plugin-import/recommended',
			'plugin:prettier/recommended',
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:@typescript-eslint/recommended'
		)
	),
	{
		rules: {
			'no-unused-vars': ['off', {args: 'after-used'}],
			'no-undef': ['off'],
			'comma-dangle': ['off', 'always'],
			'prettier/prettier': [
				'error',
				{
					printWidth: 80,
				},
			],
			//todo
			'@typescript-eslint/no-unused-vars': ['off'],
			'@typescript-eslint/no-require-imports': ['off'],
			'import/namespace': ['off'],
			'import/named': ['off'],
			'import/no-unresolved': ['off'],
			'no-redeclare': ['off'],
			'import/no-duplicates': ['off'],
			'import/default': ['off'],
			'import/no-named-as-default': ['off'],
			'import/no-named-as-default-member': ['off'],
			'no-console': ['error', {allow: ['warn', 'error']}],
		},
	},
	{
		plugins: {
			prettier: fixupPluginRules(prettier),
		},
		languageOptions: {
			globals: {
				...globals.commonjs,
				...globals.jest,
				...globals.node,
			},

			ecmaVersion: 12,
			sourceType: 'commonjs',
		},
		settings: {
			'import/resolver': {
				alias: {
					map: [
						['@/', './*'],
						['@/lib', './lib/'],
						['@/mocks', './mocks/'],
					],
					extensions: ['.ts', '.json', '.md'],
				},
			},
		},
	},
	{
		ignores: [
			'**/dist',
			'**/coverage',
			'**/.nyc_output',
			'**/.lock-wscript',
			'**/node_modules',
			'**/jspm_packages',
			'**/.npm',
			'**/.eslintcache',
			'**/.node_repl_history',
			'**/.yarn-integrity',
		],
	},
];
