const staticExport = process.env.NEXT_STATIC_EXPORT === '1';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  allowedDevOrigins: ['10.0.0.170'],
  transpilePackages: [
    'swiper',
    'dom7',
    'ssr-window',
    '@portabletext/react',
    '@portabletext/toolkit',
  ],
  ...(staticExport ? { output: 'export' } : {}),
  serverExternalPackages: ['sharp'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
    qualities: [50, 75],
    unoptimized: staticExport,
  },
  async redirects() {
    if (staticExport) return [];

    return [
      { source: '/(projects)', destination: '/', permanent: false },
      {
        source: '/projects/inventory-management',
        destination: '/projects/inventory',
        permanent: false,
      },
    ];
  },
};
