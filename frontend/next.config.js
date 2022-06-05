/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
}
