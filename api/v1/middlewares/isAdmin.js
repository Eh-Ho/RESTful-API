const AppError = require('./errorHandler');
const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        const adminError = new AppError(
            'Access denied. You do not have permission to perform this action.',
            StatusCodes.FORBIDDEN 
        );
        next(adminError);
    };
};