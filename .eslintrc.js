module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	"no-tabs": 0, 								// Override airbnb.
	"no-console": 0,
	"global-require": 0, 						// Some requires are within a process.env === development check.
	"import/no-extraneous-dependencies": 0,
	"import/no-dynamic-require": 0,
	"no-case-declarations": 0,
	"no-underscore-dangle": 0,
	"no-await-in-loop": 0, 						// Some API calls cannot be aggregated and must be awaited one by one.
	"guard-for-in": 0, 							// Remove this later for cron.
	"no-restricted-syntax": 0,
	"max-len": 0,
	"no-param-reassign": 0, 					// Just know when you're modifying by reference.,
	"prefer-destructuring": 0,
	"space-in-parens": ["error", "always"],
	"no-new": 0, 								// For vue instance.
	"vue/no-v-html": 0,
	"no-restricted-globals": 0,
	"no-alert": 0,
	"import/prefer-default-export": 0,
	"object-shorthand": 0,						// For deliberate lexical reasons.
	"func-names": 0,							// For deliberate lexical reasons.
	"no-unused-expressions" : 0,				// So we can do one line things.
	"prefer-arrow-callback": 0,					// Not always using lambda approach. Need lexical scope.
	"vue/comment-directive": "off"				// Stop error form happening in html files.
  },
};
