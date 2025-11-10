const BaseService = require(`${config.path.services}/BaseService`);

module.exports = new class CommentService extends BaseService {
    
    createComment () {
        return console.log('createComment');
    };

    updateComment () {
        return console.log('updateComment');
    };

    deleteComment () {
        return console.log('deleteComment');
    };

    getComment () {
        return console.log('getComment');
    };

    getAllComments () {
        return console.log('getAllComments');
    };

}