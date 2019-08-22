module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    );

    return {
      ...config,
      node: {
        fs: 'empty',
      },
    };
  },
  target: 'serverless',
};
