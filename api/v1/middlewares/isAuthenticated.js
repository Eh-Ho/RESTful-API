const jwt = require('jsonwebtoken');
const AppError = require('./errorHandler'); 
const { StatusCodes } = require('http-status-codes'); 

module.exports = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');
        
        if (!authHeader) {
            throw new AppError(
                'Not authenticated. No authorization header provided.', 
                StatusCodes.UNAUTHORIZED 
            );
        };

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new AppError(
                'Not authenticated. Token format is invalid.', 
                StatusCodes.UNAUTHORIZED 
            );
        };


        const decodedToken = jwt.verify(token, config.JWT_SECRET);

        req.user = decodedToken; 

        next();

    } catch (err) {
        
        const authError = new AppError(
            'Authentication failed. Token is invalid or expired.', 
            StatusCodes.UNAUTHORIZED 
        );
        
        next(authError);
    };
};