const express = require('express');
const router = express.Router();



// public controllers
const HomeCourseController = require(`${config.path.controllers.api}/v1/homeController`);

// admin controllers
const AdminCourseController = require(`${config.path.controllers.api}/v1/admin/courseController`);



// public routes
router.route('/').get(HomeCourseController.index);




// admin routes
router.route('/admin/courses').get(AdminCourseController.index.bind(AdminCourseController));
router.route('/admin/courses/:id').get(AdminCourseController.single.bind(AdminCourseController));
router.route('/admin/courses').post(AdminCourseController.store.bind(AdminCourseController));
router.route('/admin/courses/:id').put(AdminCourseController.update.bind(AdminCourseController));
router.route('/admin/courses/:id').delete(AdminCourseController.destroy.bind(AdminCourseController));



module.exports = router;
