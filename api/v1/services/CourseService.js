const BaseService = require(`${config.path.services}/BaseService`);
const {StatusCodes} = require('http-status-codes');
const AppError = require(`${config.path.middlewares}/errorHandler`);

module.exports = new class CourseService extends BaseService {
    
    async createCourse (courseBody) {
        try{
            let newCourse = new this.model.Course(courseBody);
            await newCourse.save();
            return newCourse;
        } catch(err) {
            throw err;
        };
    };

    async updateCourse (courseBody, courseId) {
        try {
            let course = await this.model.Course.findByIdAndUpdate(courseId, courseBody, {new : true});
            if (!course) throw new AppError('Course Not Found', StatusCodes.NOT_FOUND);
            return course;
        } catch (err) {
            throw err;
        }
    };

    async deleteCourse (courseId) {
        try{
            let course = await this.model.Course.findByIdAndDelete(courseId);
            if (!course) throw new AppError('Course Not Found', StatusCodes.NOT_FOUND);
            return course
        } catch(err) {
            throw err;
        };
    };

    async getCourse (courseId) {
        try{
            let course = await this.model.Course.findById(courseId);
            if (!course) throw new AppError('Course Not Found', StatusCodes.NOT_FOUND);
            return course;
        }catch (err) {
            throw err;
        };
    };

    async getUserCourses (userId) {
        try{
            let user = await this.model.User.findById(userId).populate('courses');
            if(!user) throw new AppError('User Not Found', StatusCodes.NOT_FOUND);
            return user.courses;
        }catch (err){
            throw err;
        };
    }

    async getAllCourses () {
        try{
            let courses = await this.model.Course.find({});
            return courses;
        }catch(err){
            throw err;
        };
    };

}