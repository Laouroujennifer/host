/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Utilise le minificateur rapide intégré
  transpilePackages: ["react-elastic-carousel"], // Ajoute le nom de ton package problématique ici
};

module.exports = nextConfig;
