import AuthController from './auth.controller';

const Router = require('express').Router();

Router.route('/auth/login').get(AuthController.login);

export default Router;
