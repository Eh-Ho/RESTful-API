
module.exports = {
    // user controllers
    CourseController : require('./user/CourseController'),

    //public controllers
    HomeController : require('./public/HomeController'),
    AuthController : require('./public/AuthController'),

    // admin controllers
    AdminCourseController : require('./admin/AdminCourseController'),
    AdminEpisodeController : require('./admin/AdminEpisodeController'),
    AdminUserController : require('./admin/AdminUserController')
}