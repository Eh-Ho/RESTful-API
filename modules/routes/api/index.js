const express  = require('express');
const API_Router = express.Router();

const API_V1 = require('./api-V1');


API_Router.use('/v1',API_V1);


module.exports = API_Router;