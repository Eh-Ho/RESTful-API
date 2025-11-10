const express = require('express');
const publicRouter = express.Router();
const {HomeController, CourseController} = require(`${config.path.controllers}`);

publicRouter.route('/').get(HomeController.index.bind(HomeController));
publicRouter.route('/courses').get(CourseController.getAllCourses.bind(CourseController));
publicRouter.route('/courses/:courseId').get(CourseController.getCourse.bind(CourseController));


module.exports = publicRouter;