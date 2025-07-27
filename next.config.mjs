const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.freebieskit.com',
          },
        ],
        destination: 'https://freebieskit.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;