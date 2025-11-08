const BaseTransform = require('./BaseTransform');

module.exports = new class CourseTransform extends BaseTransform{
    
    transform (item) {
        return {
            'title' : item.title,
            'body' : item.body,
            'price' : item.price
        };
    };

};