const { body, param } = require('express-validator');
const Validator  = require(`${config.path.validators}/Validator`);


module.exports = new class EpisodeValidator extends Validator {

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