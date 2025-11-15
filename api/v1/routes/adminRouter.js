const express = require('express');
const adminRouter = express.Router();

const {AdminCourseController, AdminEpisodeController, AdminUserController} = require(`${config.path.controllers}`);
const {EpisodeValidator, CourseValidator, UserValidator} = require(`${config.path.validators}`);





// users 
adminRouter.route('/users')
.get(AdminUserController.getAllUsers.bind(AdminUserController))
.post(AdminUserController.createUser.bind(UserValidator.validateStore, UserValidator.handleValidationErrors,AdminUserController));
adminRouter.route('/users/:usersId')
.get(AdminUserController.getUser.bind(AdminUserController))
.put(AdminUserController.updateUser.bind(UserValidator.validateUpdate, UserValidator.handleValidationErrors, AdminUserController))
.delete(AdminUserController.deleteUser.bind(AdminUserController));



// courses
adminRouter.route('/courses')
.get(AdminCourseController.getAllCourses.bind(AdminCourseController));

adminRouter.route('/users/:userId/courses')
.get(AdminCourseController.getUserCourses.bind(AdminCourseController))
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

