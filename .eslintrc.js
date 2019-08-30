module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks'],
	extends: ['react-app'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'never']
	}
}
