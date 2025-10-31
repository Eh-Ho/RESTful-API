const express = require('express');
const router = express.Router();



// public controllers
const HomeCourseController = require(`${config.path.controllers.api}/v1/homeController`);

// admin controllers
const AdminCourseController = require(`${config.path.controllers.api}/v1/admin/courseController`);



// public routes
router.route('/').get(HomeCourseController.index);




// admin routes
router.route('/admin/courses').get(AdminCourseController.index);
router.route('/admin/courses/:id').get(AdminCourseController.single);
router.route('/admin/courses').post(AdminCourseController.store);
router.route('/admin/courses/:id').put(AdminCourseController.update);
router.route('/admin/courses/:id').delete(AdminCourseController.destroy);



module.exports = router;
