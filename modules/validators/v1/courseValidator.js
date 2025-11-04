const { body, param, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};

const validateStore = [
    body('title')
        .notEmpty().withMessage('Title is required.')
        .trim()
        .escape(),
    body('description')
        .optional() 
        .trim()
        .escape(),
    body('price')
        .notEmpty().withMessage('Price is required.')
        .isNumeric().withMessage('Price must be a number.')
];

const validateUpdate = [
    param('id')
        .isMongoId().withMessage('Invalid Course ID format.'),
    
    body('title')
        .optional()
        .notEmpty().withMessage('Title cannot be empty.')
        .trim()
        .escape(),
    body('price')
        .optional()
        .isNumeric().withMessage('Price must be a number.')
];

module.exports = {
    validateStore,
    validateUpdate,
    handleValidationErrors
};