// next.config.js

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com", "avatars.githubusercontent.com"]
//   },
//   // other Next.js configurations if needed
// };

const runtimeCaching = require("next-pwa/cache");
const prod = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    disable: prod ? false : true,
    skipWaiting: true
});

const nextConfig = withPWA({
    images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com", "avatars.githubusercontent.com"]
  },
});
module.exports = nextConfig;