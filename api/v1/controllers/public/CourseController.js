const pathResolver = require('../../../utilities/pathResolver');
const CourseService = require(`${pathResolver('v1').services}/CourseService`);
const { StatusCodes, ReasonPhrases } = require('http-status-codes');


module.exports = new class CourseController {
    
    async getAllCourses(req, res){
        res.status(StatusCodes.OK).json(await CourseService.getAllCourses());
    };

    async getCourse(req, res){
        res.status(StatusCodes.OK).json(await CourseService.getCourse(req.params.courseId));
    };

}