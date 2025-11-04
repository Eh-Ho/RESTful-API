const Controller = require(`${config.path.controller}`);
const CourseTransform = require(`${config.path.transforms}/v1/courseTransform`);

module.exports = new class CourseController extends Controller {
    
    async index(req, res){
        try{
            let courses = await this.model.Course.find({});
            res.json(CourseTransform.transformCollection(courses));
        }catch(err){
            res.send(err);
        };
    };

    async single(req, res){
        try{
            let course = await this.model.Course.findById(req.params.id);
            res.json(CourseTransform.transform(course));
        }catch (err) {
            res.send(err);
        };
    };

}