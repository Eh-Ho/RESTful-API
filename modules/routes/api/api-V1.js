const express = require('express');
const router = express.Router();


// validators
const CourseValidator = require(`${config.path.validators}/v1/CourseValidator`);
const EpisodeValidator = require(`${config.path.validators}/v1/EpisodeValidator`);

// public controllers
const HomeCourseController = require(`${config.path.controllers.api}/v1/homeController`);
const CourseController = require(`${config.path.controllers.api}/v1/courseController`);

// admin controllers
const AdminCourseController = require(`${config.path.controllers.api}/v1/admin/adminCourseController`);
const AdminEpisodeController = require(`${config.path.controllers.api}/v1/admin/adminEpisodeController`);


// public routes
router.route('/').get(HomeCourseController.index);
router.route('/courses').get(CourseController.index.bind(CourseController));
router.route('/courses/:courseId').get(CourseController.single.bind(CourseController));





// admin routes
const adminRouter = express.Router();

// courses
adminRouter.route('/courses')
.get(AdminCourseController.index.bind(AdminCourseController))
.post(CourseValidator.validateStore, CourseValidator.handleValidationErrors, AdminCourseController.store.bind(AdminCourseController));

adminRouter.route('/courses/:courseId')
.get(AdminCourseController.single.bind(AdminCourseController))
.put(CourseValidator.validateUpdate, CourseValidator.handleValidationErrors, AdminCourseController.update.bind(AdminCourseController))
.delete(AdminCourseController.destroy.bind(AdminCourseController));

// episodes
adminRouter.route('/episodes')
.get(AdminEpisodeController.index.bind(AdminEpisodeController));

adminRouter.route('/courses/:courseId/episodes')
.get(AdminEpisodeController.courseIndex.bind(AdminEpisodeController))
.post(EpisodeValidator.validateStore, EpisodeValidator.handleValidationErrors, AdminEpisodeController.store.bind(AdminEpisodeController));

adminRouter.route('/episodes/:episodeId')
.get(AdminEpisodeController.single.bind(AdminEpisodeController))
.put(EpisodeValidator.validateUpdate, EpisodeValidator.handleValidationErrors, AdminEpisodeController.update.bind(AdminEpisodeController))
.delete(AdminEpisodeController.destroy.bind(AdminEpisodeController));



router.use('/admin', adminRouter);

module.exports = router;
