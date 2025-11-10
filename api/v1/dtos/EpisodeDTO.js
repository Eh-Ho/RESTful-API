module.exports = new class EpisodeDTO {

    create (reqBody, reqParams) {
        return{
           course : reqParams.courseId,
           title : reqBody.title,
           body : reqBody.body,
           videoUrl : reqBody.videoUrl,
           number : reqBody.number  
        };
    };

    update (reqBody) {
        const updateData = {};

        const allowedFields = ['title', 'body', 'videoUrl', 'number'];

        allowedFields.forEach(field => {
            
            if (reqBody[field] !== undefined) {
                updateData[field] = reqBody[field];
            }
        });
        
        return updateData;
    };

};