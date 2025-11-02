const Controller = require('../../../controller');


module.exports = new class CourseController extends Controller{

    async index(req, res){
        try{
            let courses = await this.model.Course.find({});
            res.json(courses);

        }catch(err){
            res.json({err})
        }
        
    }

    single(req, res){
        res.json({message: 'AdminCourseController single method'});
    }

    async store(req, res){
        try{
            let newCourse = new this.model.Course(req.body);
            res.json(await newCourse.save());
            
        } catch(err) {
            res.json({err})
        }
    }


    update(req, res){
        res.json({message: 'AdminCourseController update method'});
    }


    destroy(req, res){
        res.json({message: 'AdminCourseController destroy method'});
    }

};