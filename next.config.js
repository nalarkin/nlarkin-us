/* eslint-disable no-param-reassign */
// /* eslint-disable no-param-reassign */
// /* eslint-disable no-unused-vars */
// @ts-check
// const path = require("path");
const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      // {
      //   source: "/projects/:slug(\\w{1,})",
      //   destination: "/projects/:slug",
      //   permanent: true,
      // },
      {
        source: "/(projects)",
        destination: "/",
        permanent: false,
      },
      {
        source: "/projects/inventory-management",
        destination: "/projects/inventory",
        permanent: true,
      },
    ];
  },
});
// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = (_phase, { defaultConfig }) => {
//   if ("sassOptions" in defaultConfig) {
//     defaultConfig.sassOptions = {
//       includePaths: ["./styles"],
//     };
//   }

//   if ("reactStrictMode" in defaultConfig) {
//     defaultConfig.reactStrictMode = true;
//   }
//   return withPlaiceholder({
//     ...defaultConfig,
//     images: { domains: ["cdn.sanity.io"] },
//     async redirects() {
//       return [
//         // {
//         //   source: "/projects/:slug(\\w{1,})",
//         //   destination: "/projects/:slug",
//         //   permanent: true,
//         // },
//         {
//           source: "/(projects)",
//           destination: "/",
//           permanent: false,
//         },
//       ];
//     },
//   });
// };
// module.exports = nextConfig;
