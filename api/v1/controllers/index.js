module.exports = {
    // public controllers
    HomeController : require('./public/HomeController'),
    CourseController : require('./public/CourseController'),

    // admin controllers
    AdminCourseController : require('./admin/AdminCourseController'),
    AdminEpisodeController : require('./admin/AdminEpisodeController')
}