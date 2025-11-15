const BaseValidator = require(`${config.path.validators}/BaseValidator`);
const {body, param} = require('express-validator');


module.exports = new class UserValidator extends BaseValidator {


    validateStor = [
        body('name').notEmpty().withMessage('Name is required.').trim().escape(),
        body('email').notEmpty().withMessage('Email is required.').isEmail().withMessage('Must be a Email Address.').trim().normalizeEmail(),
        body('password').notEmpty().withMessage('Password is required').trim().escape(),
    ];


    validateUpdate = [
        param('userId').isMongoId().withMessage('Invalid User ID format.'),
        body('name').optional().notEmpty().withMessage('Name cannot be empty.').trim().escape(),
        body('email').optional().notEmpty().withMessage('Email cannot be empty.').isEmail().withMessage('Must be a Email Address.').trim().normalizeEmail(),
        body('password').optional().notEmpty().withMessage('Password cannot be empty.').trim().escape(),
    ];
}