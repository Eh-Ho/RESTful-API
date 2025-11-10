const { body, param } = require('express-validator');
const BaseValidator  = require(`${config.path.validators}/BaseValidator`);


module.exports = new class EpisodeValidator extends BaseValidator {

    validateStore = [
        param('courseId').isMongoId().withMessage('Invalid Course ID Format'),
        body('title').notEmpty().withMessage('Title is required.').trim().escape(),
        body('body').notEmpty().withMessage('Body is required.').trim().escape(),
        body('videoUrl').notEmpty().withMessage('VideoUrl is required.').isURL().withMessage('Must be a valid URL.').trim(),
        body('number').notEmpty().withMessage('Number is required.').isNumeric().withMessage('Number must be a number.')
    ];


    validateUpdate = [
        param('episodeId').isMongoId().withMessage('Invalid Episode ID format.'),
        body('title').optional().notEmpty().withMessage('Title is required.').trim().escape(),
        body('body').optional().notEmpty().withMessage('Body cannot be empty.').trim().escape(),
        body('videoUrl').optional().isURL().withMessage('Must be a valid URL.').trim(),
        body('number').optional().isNumeric().withMessage('Number must be a number.')
    ];


}