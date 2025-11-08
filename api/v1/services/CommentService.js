const pathResolver = require('../../utilities/pathResolver');
const BaseService = require(`${pathResolver('v1').services}/BaseService`);

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