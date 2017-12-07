require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_URL,
    dialect: 'postgres',
    apiVersion: process.env.API_VERSION || 'v1',
  },
  test: {
    url: process.env.TEST_URL,
    dialect: 'postgres',
    apiVersion: process.env.API_VERSION || 'v1',
  },
  production: {
    url: process.env.PROD_URL,
    dialect: 'postgres',
    apiVersion: process.env.API_VERSION || 'v1',
  },
};
