/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL
  }
}

const remove = (phase, { }) => {
  return removeImports({
    ...nextConfig
  })
}


module.exports = remove


