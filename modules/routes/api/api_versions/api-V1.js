const express = require('express');
const router = express.Router();


// public controllers
const HomeCourseController = require(`${config.path.controllers.api}/v1/homeController`)

// admin controllers
const AdminCourseController = require(`${config.path.controllers.api}/v1/admin/courseController`)



// public routes
router.route('/').get(HomeCourseController.index)




// admin routes
router.route('/admin/courses').get(AdminCourseController.index);
router.route('/admin/courses').post(AdminCourseController.store);
router.route('/admin/courses').put(AdminCourseController.update);
router.route('/admin/courses').delete(AdminCourseController.destroy);



module.exports = router;
