const Controller = require(`${config.path.controller}`);


module.exports = new class AdminCourseController extends Controller{

    async index(req, res){
        try{
            let courses = await this.model.Course.find({});
            res.status(200).json(courses);

        }catch(err){
            res.status(500).send(err);
        }
        
    }

    async single(req, res){
        try{
            let course = await this.model.Course.findById(req.params.courseId);
            res.status(200).json(course);
        }catch (err) {
            res.status(500).send(err);
        }
    }

    async store(req, res){
        try{
            let newCourse = new this.model.Course(req.body);
            res.status(200).json(await newCourse.save());
        } catch(err) {
            res.status(500).send(err);
        }
    }


    async update(req, res){
        try {
            res.status(200).json(await this.model.Course.findByIdAndUpdate(req.params.courseId, req.body, {new : true}));
        } catch (err) {
            res.status(500).send(err);
        }
        
    }


    async destroy(req, res){
        try{
            res.status(200).json(await this.model.Course.findByIdAndDelete(req.params.courseId));
        } catch(err) {
            res.status(500).send(err);
        }
    }

};