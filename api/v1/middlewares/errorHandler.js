const {StatusCodes} = require('http-status-codes');

module.exports = (err, req, res, next) => {
    if(err.isOperational){
      return res.status(err.statusCode).json({
        message : err.message
      });
    };
  
    if(err.name === 'CastError'){
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
  
}
