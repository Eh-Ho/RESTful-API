const express = require('express');
const router = express.Router();
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');
const publicRouter = require('./userRouter');

const {errorHandler, isAuthenticated, isAdmin} = require(`${config.path.middlewares}`);



router.use('/v1', publicRouter);
router.use('/v1', isAuthenticated, userRouter);
router.use('/v1/admin', isAuthenticated, isAdmin, adminRouter);

// error handler middleware
router.use('/', errorHandler);

module.exports = router;