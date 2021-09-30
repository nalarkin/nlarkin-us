/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src', './styles'],
      // prependData: `@import "~@styles/variables.scss";`,
    };
  }

  if ('reactStrictMode' in defaultConfig) {
    defaultConfig['reactStrictMode'] = true;
  }
  // if ('images' in defaultConfig) {
  //   defaultConfig['images'] = { domains: ['cdn.sanity.io'] };
  // }

  return { ...defaultConfig, images: { domains: ['cdn.sanity.io'] } };
};
// module.exports = {
// reactStrictMode: true,
// images: {
//   domains: ['cdn.sanity.io'],
// },
// };
