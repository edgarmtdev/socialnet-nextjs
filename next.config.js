/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const remove = (phase, { }) => {
  return removeImports({
    ...nextConfig
  })
}

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  }
}

module.exports = remove


