module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': 'plugin:react/recommended',
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'comma-dangle': [ 'error', 'never' ],
        'semi': [ 'error', 'never' ],
        'quotes': [ 'error', 'single' ],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': [ 'off' ],
        'space-before-function-paren': [ 'error' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ]
    }
}
