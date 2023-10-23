/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          '/wikipedia/commons/thumb/5/53/Google_"G"_Logo.svg/1200px-Google_"G"_Logo.svg.png',
      },
    ],
  },
};

module.exports = nextConfig;
