const express = require('express');
const userRouter = require('./userRouter');

const publicRouter = express.Router();
const {HomeController} = require(`${config.path.controllers}`);


// home
userRouter.route('/').get(HomeController.index.bind(HomeController));


// auth
userRouter.route('/register').post();
userRouter.route('/signin').post();
userRouter.route('/signout').post();


module.exports = publicRouter;


