const Controller = require(`${config.path.controller}`);


module.exports = new class AdminCourseController extends Controller{

    async index(req, res){
        try{
            let courses = await this.model.Course.find({});
            res.json(courses);

        }catch(err){
            res.send(err);
        }
        
    }

    async single(req, res){
        try{
            let course = await this.model.Course.findById(req.params.id);
            res.json(course);
        }catch (err) {
            res.send(err);
        }
    }

    async store(req, res){
        try{
            let newCourse = new this.model.Course(req.body);
            res.json(await newCourse.save());
        } catch(err) {
            res.send(err);
        }
    }


    async update(req, res){
        try {
            res.json(await this.model.Course.findByIdAndUpdate(req.params.id, req.body, {new : true}));
        } catch (err) {
            req.send(err);
        }
        
    }


    async destroy(req, res){
        try{
            res.json(await this.model.Course.findByIdAndDelete(req.body.id));
        } catch(err) {
            res.send(err);
        }
    }

};