const express = require('express');
const adminRouter = express.Router();

const {AdminCourseController, AdminEpisodeController} = require(`${config.path.controllers}`);
const {EpisodeValidator, CourseValidator} = require(`${config.path.validators}`);


// courses
adminRouter.route('/courses')
.get(AdminCourseController.getAllCourses.bind(AdminCourseController))
.post(CourseValidator.validateStore, CourseValidator.handleValidationErrors, AdminCourseController.createCourse.bind(AdminCourseController));

adminRouter.route('/courses/:courseId')
.get(AdminCourseController.getCourse.bind(AdminCourseController))
.put(CourseValidator.validateUpdate, CourseValidator.handleValidationErrors, AdminCourseController.updateCourse.bind(AdminCourseController))
.delete(AdminCourseController.deleteCourse.bind(AdminCourseController));

// episodes
adminRouter.route('/episodes')
.get(AdminEpisodeController.getAllEpisodes.bind(AdminEpisodeController));

adminRouter.route('/courses/:courseId/episodes')
.get(AdminEpisodeController.getCourseEpisodes.bind(AdminEpisodeController))
.post(EpisodeValidator.validateStore, EpisodeValidator.handleValidationErrors, AdminEpisodeController.createEpisode.bind(AdminEpisodeController));

adminRouter.route('/episodes/:episodeId')
.get(AdminEpisodeController.getEpisode.bind(AdminEpisodeController))
.put(EpisodeValidator.validateUpdate, EpisodeValidator.handleValidationErrors, AdminEpisodeController.updateEpisode.bind(AdminEpisodeController))
.delete(AdminEpisodeController.deleteEpisode.bind(AdminEpisodeController));


module.exports = adminRouter;

