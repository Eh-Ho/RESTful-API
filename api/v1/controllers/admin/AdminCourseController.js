const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const CourseService = require(`${config.path.services}/CourseService`);
const CourseDTO = require(`${config.path.dtos}/CourseDTO`);

module.exports = new class AdminCourseController {

    async getAllCourses(req, res){
        res.status(StatusCodes.OK).json({data : await CourseService.getAllCourses()}); 
    };


    async getUserCourses () {

    };

    async getCourse(req, res){
        res.status(StatusCodes.OK).json({data : await CourseService.getCourse(req.params.courseId)});
    };

    async createCourse(req, res){
        const courseBody = CourseDTO.create(req.body);
        res.status(StatusCodes.OK).json({data : await CourseService.createCourse(courseBody)});
    };


    async updateCourse(req, res){
        const courseBody = CourseDTO.update(req.body);
        res.status(StatusCodes.OK).json({data : await CourseService.updateCourse(courseBody, req.params.courseId)});
    };


    async deleteCourse(req, res){
        res.status(StatusCodes.OK).json({data : await CourseService.deleteCourse(req.params.courseId)});
    };

};