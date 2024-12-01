import withLess from 'next-plugin-less';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Autres options que tu peux utiliser
  // Ajouter ici d'autres options Next.js si nécessaire
};

// Exporter la configuration combinée avec `withLess`
export default withLess({
  ...nextConfig,  // Fusionner avec la configuration existante de Next.js
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        'primary-color': '#1DA57A',  // Exemple de personnalisation du thème
        'link-color': '#1DA57A',
      },
      javascriptEnabled: true,  // Nécessaire pour Ant Design
    },
  },
});
