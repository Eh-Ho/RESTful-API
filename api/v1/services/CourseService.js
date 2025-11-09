const pathResolver = require('../../utilities/pathResolver');
const BaseService = require(`${pathResolver('v1').services}/BaseService`);
const CourseTransform = require(`${pathResolver('v1').transforms}/CourseTransform`);

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
            return course;
        } catch (err) {
            throw err;
        }
    };

    async deleteCourse (courseId) {
        try{
            let course = await this.model.Course.findByIdAndDelete(courseId);
            return course
        } catch(err) {
            throw err;
        };
    };

    async getCourse (courseId) {
        try{
            let course = await this.model.Course.findById(courseId);
            return CourseTransform.transform(course);
        }catch (err) {
            throw err;
        };
    };

    async getAllCourses () {
        try{
            let courses = await this.model.Course.find({});
            return CourseTransform.transformCollection(courses);
        }catch(err){
            throw err;
        };
    };

}