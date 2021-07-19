module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
