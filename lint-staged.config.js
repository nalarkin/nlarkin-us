/* eslint-disable prettier/prettier */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['yarn lint --fix', 'yarn lint'],
  '**/*.ts?(x)': () => 'yarn run build-types',
  '*.json': ['prettier --write'],
};
