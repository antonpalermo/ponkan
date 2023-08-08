/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  redirects: async () => [
    { source: "/", destination: "/overview", permanent: false }
  ]
}

module.exports = config
