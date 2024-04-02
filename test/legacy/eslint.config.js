import drupalContrib from '../../dist/es/index.js';

const legacy = drupalContrib.configs['flat/legacy'];

const config = {
  plugins: {
    legacy
  }
};

export default [
  config,
  {
    files: ['*.js']
  }
];
