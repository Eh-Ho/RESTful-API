const pathResolver = require('../../utilities/pathResolver');
const { body, param } = require('express-validator');
const BaseValidator  = require(`${pathResolver('v1').validators}/BaseValidator`);

module.exports = new class CourseValidator extends BaseValidator{

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
        param('courseId')
            .isMongoId().withMessage('Invalid Course ID format.'),
        
        body('title')
            .optional()
            .notEmpty().withMessage('Title cannot be empty.')
            .trim()
            .escape(),
        body('price')
            .optional()
    ];

};