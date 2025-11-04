const { body, param, validationResult } = require('express-validator');
const Validator  = require(`${config.path.validators}/Validator`);

module.exports = new class CourseValidator extends Validator{

    validateStore = [
        body('title')
            .notEmpty().withMessage('Title is required.')
            .trim()
            .escape(),
        body('body')
            .optional() 
            .trim()
            .escape(),
        body('price')
            .notEmpty().withMessage('Price is required.')
    ];

    validateUpdate = [
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

};