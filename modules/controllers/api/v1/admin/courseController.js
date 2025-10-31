


module.exports = new class CourseController {
    index(req, res){
        res.json({message: 'AdminCourseController index method'});
    }

    store(req, res){
        res.json({message: 'AdminCourseController store method}'})
    }


    update(req, res){
        res.json({message: 'AdminCourseController update method'});
    }


    destroy(req, res){
        res.json({message: 'AdminCourseController destroy method'});
    }

};