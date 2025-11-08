const pathResolver = require('../../utilities/pathResolver');
const { body, param } = require('express-validator');
const BaseValidator  = require(`${pathResolver('v1').validators}/BaseValidator`);


module.exports = new class EpisodeValidator extends BaseValidator {

    validateStore = [
        param('courseId').isMongoId().withMessage('Invalid Course ID Format'),
        body('title').notEmpty().withMessage('Title is required.').trim().escape(),
        body('body').notEmpty().withMessage('Body is required.').trim().escape(),
        body('videoUrl').notEmpty().withMessage('VideoUrl is required.').trim(),
        body('number').notEmpty().withMessage('Number is required.').isNumeric().withMessage('Price must be a number.')
    ];


    validateUpdate = [
        param('episodeId').isMongoId().withMessage('Invalid Episode ID format.'),
        body('title').notEmpty().withMessage('Title is required.').trim().escape()
    ];


}