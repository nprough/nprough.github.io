import type { NextConfig } from "next";

const nextConfig = {
  basePath: "/nprough.github.io",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
