const pathResolver = require('../../utilities/pathResolver');
const BaseService = require(`${pathResolver('v1').services}/BaseService`);

module.exports = new class UserService extends BaseService {
    
    createUser () {
        return console.log('createUser');
    };

    updateUser () {
        return console.log('updateUser');
    };

    deleteUser () {
        return console.log('deleteUser');
    };

    getUser () {
        return console.log('getUser');
    };

    getAllUsers () {
        return console.log('getAllUsers');
    };

}