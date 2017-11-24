import authRouter from './auth/auth.route';

const version = process.env.API_VERSION || 'v1';
const apiPrefix = `/api/${version}`;

module.exports = (app) => {
  app.use(apiPrefix, authRouter);
  return app;
};
