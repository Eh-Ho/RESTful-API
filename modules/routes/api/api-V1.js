const express = require('express');
const router = express.Router();


// validators
const CourseValidator = require(`${config.path.validators}/v1/CourseValidator`)


// public controllers
const HomeCourseController = require(`${config.path.controllers.api}/v1/homeController`);
const CourseController = require(`${config.path.controllers.api}/v1/courseController`);

// admin controllers
const AdminCourseController = require(`${config.path.controllers.api}/v1/admin/adminCourseController`);
const AdminEpisodeController = require(`${config.path.controllers.api}/v1/admin/adminEpisodeController`);



// public routes
router.route('/').get(HomeCourseController.index);
router.route('/courses').get(CourseController.index.bind(CourseController));
router.route('/courses/:id').get(CourseController.single.bind(CourseController));





// admin routes
const adminRouter = express.Router();

adminRouter.route('/courses')
.get(AdminCourseController.index.bind(AdminCourseController))
.post(CourseValidator.validateStore, CourseValidator.handleValidationErrors, AdminCourseController.store.bind(AdminCourseController));

adminRouter.route('/courses/:id')
.get(AdminCourseController.single.bind(AdminCourseController))
.put(CourseValidator.validateUpdate, CourseValidator.handleValidationErrors, AdminCourseController.update.bind(AdminCourseController));

adminRouter.route('/courses/').delete(AdminCourseController.destroy.bind(AdminCourseController));

router.use('/admin', adminRouter);

module.exports = router;
