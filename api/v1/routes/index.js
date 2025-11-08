const express = require('express');
const router = express.Router();
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');


router.use('/v1/admin', adminRouter);

router.use('/v1', publicRouter);


module.exports = router;