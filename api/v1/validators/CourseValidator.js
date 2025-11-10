const { body, param } = require('express-validator');
const BaseValidator  = require(`${config.path.validators}/BaseValidator`);

module.exports = new class CourseValidator extends BaseValidator{

    validateStore = [
        body('title').notEmpty().withMessage('Title is required.').trim().escape(),
        body('body').notEmpty().withMessage('Body is required.').trim().escape(),
        body('price').notEmpty().withMessage('Price is required.').trim().escape(),
        body('image').optional().notEmpty().withMessage('Image cannot be empty.').isURL().withMessage('Must be a valid URL.').trim(),
    ];

    validateUpdate = [
        param('courseId').isMongoId().withMessage('Invalid Course ID format.'),
        body('title').optional().notEmpty().withMessage('Title cannot be empty.').trim().escape(),
        body('body').optional().notEmpty().withMessage('Body cannot be empty.').trim().escape(),
        body('price').optional().notEmpty().withMessage('Price cannot be empty.').trim().escape(),
        body('image').optional().notEmpty().withMessage('Image cannot be empty.').isURL().withMessage('Must be a valid URL.').trim(),

    ];

};