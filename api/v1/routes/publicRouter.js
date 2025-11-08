const express = require('express');
const publicRouter = express.Router();
const pathResolver = require('../../utilities/pathResolver');
const {HomeController, CourseController} = require(`${pathResolver('v1').controllers}`);

publicRouter.route('/').get(HomeController.index.bind(HomeController));
publicRouter.route('/courses').get(CourseController.getAllCourses.bind(CourseController));
publicRouter.route('/courses/:courseId').get(CourseController.getCourse.bind(CourseController));


module.exports = publicRouter;