/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};

const remove = (phase, {}) => {
  return removeImports({
    ...nextConfig,
  });
};

module.exports = remove;
