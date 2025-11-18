const express = require('express');
const userRouter = require('./userRouter');

const publicRouter = express.Router();
const {HomeController, AuthController} = require(`${config.path.controllers}`);
const AuthValidator = require(`${config.path.validators}`);
// home
userRouter.route('/').get(HomeController.index.bind(HomeController));


// auth
userRouter.route('/register').post(AuthValidator.validateRegister, AuthValidator.handleValidationErrors, AuthController.register.bind(AuthController));
userRouter.route('/signin').post(AuthValidator.validateSignIn, AuthValidator.handleValidationErrors, AuthController.signIn.bind(AuthController));
userRouter.route('/signout').post(AuthController.signOut.bind(AuthController));


module.exports = publicRouter;


