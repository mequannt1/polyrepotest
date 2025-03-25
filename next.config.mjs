/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remoteApp', // Name of the remote app
        filename: 'static/chunks/remoteEntry.js', // Federated module entry file
        exposes: {
          './RemoteComponent': './src/components/RemoteComponent.js', // Expose Header component
        },
        shared: {
          // react: { singleton: true, eager: true, requiredVersion: '^18.0.0' },
          // 'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
