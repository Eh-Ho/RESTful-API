const express = require('express');
const router = express.Router();


// public controllers
const HomeCourseController = require('../../../modules/controllers/api/v1/homeController')

// admin controllers
const AdminCourseController = require('../../../modules/controllers/api/v1/admin/courseController')



// public routes
router.route('/').get(HomeCourseController.index)


// admin routes
router.route('/admin/courses').get(AdminCourseController.index);




module.exports = router;
