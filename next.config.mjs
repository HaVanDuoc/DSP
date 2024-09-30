import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://provinces.open-api.vn/api/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
