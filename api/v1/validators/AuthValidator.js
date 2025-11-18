const BaseValidator = require(`${config.path.validators}/BaseValidator`);
const {body, param} = require('express-validator');


module.exports = new class AuthValidator extends BaseValidator {


    validateRegister = [
        body('name').notEmpty().withMessage('Name is required.').trim().escape(),
        body('email').notEmpty().withMessage('Email is required.').isEmail().withMessage('Must be a Email Address.').trim().normalizeEmail(),
        body('password').notEmpty().withMessage('Password is required').trim().escape(),
        // repeat password
    ];


    validateSignIn = [
        body('email').notEmpty().withMessage('Email cannot be empty.').isEmail().withMessage('Must be a Email Address.').trim().normalizeEmail(),
        body('password').notEmpty().withMessage('Password cannot be empty.').trim().escape(),
    ];

}