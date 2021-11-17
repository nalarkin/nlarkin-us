/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig.sassOptions = {
      includePaths: ["./styles"],
    };
  }

  if ("reactStrictMode" in defaultConfig) {
    defaultConfig.reactStrictMode = true;
  }
  return {
    ...defaultConfig,
    images: { domains: ["cdn.sanity.io"] },
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
      ];
    },
  };
};
