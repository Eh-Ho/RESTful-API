const express = require('express');
global.config = require('./api/config');
const bodyParser = require('body-parser');
const APIRouter = require('./api/v1/routes');
const mongoose = require('mongoose');
const {StatusCodes} = require('http-status-codes');
//connecting database
const mongoURI = `mongodb://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.databaseName}?authSource=${config.database.authSource}`;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));




// express app
const app = express();




// middlewares and routers
app.use(bodyParser.urlencoded({extended  : false}));

app.use(bodyParser.json({type : 'application/json'}));

// routers
app.use('/', APIRouter);

// error handler
app.use((err, req, res, next)=>{
  if(err.isOperational){
    return res.status(err.statusCode).json({
      message : err.message
    });
  };

  if(error.name === 'CastError'){
    const message = `Invalid value for ${err.path}: ${err.value}`;
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: message
    });
  };

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    const message = `Invalid input data: ${messages.join('. ')}`;
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: message
    });
  };

  console.error('UNKNOWN ERROR ----------------');
  console.error(err);
  console.error('---------------------------------');
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: 'Something went wrong',
  });

});






//server running
app.listen(config.port, ()=>{
    console.log(`server running on port ${config.port}`);
});
