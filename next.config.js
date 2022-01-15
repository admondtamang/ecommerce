module.exports = {
  swcMinify: true,
  env: {
    MONGO_URI: 'mongodb://localhost:27017/crm-shipper',
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'css-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
    ],
  },
};
