const express = require('express');
const router = express.Router();



// public controllers
const HomeCourseController = require(`${config.path.controllers.api}/v1/homeController`);
const CourseController = require(`${config.path.controllers.api}/v1/courseController`);

// admin controllers
const AdminCourseController = require(`${config.path.controllers.api}/v1/admin/courseController`);



// public routes
router.route('/').get(HomeCourseController.index);
router.route('/courses').get(CourseController.index.bind(CourseController));
router.route('/courses/:id').get(CourseController.single.bind(CourseController));





// admin routes
router.route('/admin/courses').get(AdminCourseController.index.bind(AdminCourseController));
router.route('/admin/courses/:id').get(AdminCourseController.single.bind(AdminCourseController));
router.route('/admin/courses').post(AdminCourseController.store.bind(AdminCourseController));
router.route('/admin/courses/:id').put(AdminCourseController.update.bind(AdminCourseController));
router.route('/admin/courses/').delete(AdminCourseController.destroy.bind(AdminCourseController));



module.exports = router;
