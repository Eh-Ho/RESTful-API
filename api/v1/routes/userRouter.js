const express = require('express');
const userRouter = express.Router();
const {CourseController} = require(`${config.path.controllers}`);


// courses
userRouter.route('/courses').get(CourseController.getAllCourses.bind(CourseController));
userRouter.route('/courses/:courseId').get(CourseController.getCourse.bind(CourseController));


module.exports = userRouter;