module.exports = new class CourseDTO {
    
    create (reqBody) {
        return {
            title : reqBody.title,
            body : reqBody.body,
            price : reqBody.price,
            image : reqBody.image
        }
    };


    update (reqBody) {
        let updatedFields = {};
        const allowedFields = ['title', 'body', 'price', 'image'];

        allowedFields.forEach(field => {
            if(reqBody[field] !== undefined)
                updatedFields[field] = reqBody[field];
        });
    };



};