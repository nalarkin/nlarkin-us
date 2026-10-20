/* eslint-disable prettier/prettier */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'yarn run build-types',
  '*.json': ['prettier --write'],
};
