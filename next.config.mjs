/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vn'],
    localePath: './public/locales',
  },
};

export default nextConfig;
