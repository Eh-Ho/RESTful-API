const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const CourseService = require('../../services/CourseService');

module.exports = new class AdminCourseController {

    async getAllCourses(req, res){
        res.status(StatusCodes.OK).json(await CourseService.getAllCourses()); 
    };

    async getCourse(req, res){
        res.status(StatusCodes.OK).json(await CourseService.getCourse(req.params.courseId));
    };

    async createCourse(req, res){
        res.status(StatusCodes.OK).json(await CourseService.createCourse(req.body));
    };


    async updateCourse(req, res){
        res.status(StatusCodes.OK).json(await CourseService.updateCourse(req.body, req.params.courseId));
    };


    async deleteCourse(req, res){
        res.status(StatusCodes.OK).json(await CourseService.deleteCourse(req.params.courseId));
    };

};