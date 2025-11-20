const {StatusCodes} = require('http-status-codes');
const UserService = require(`${config.path.services}/UserService`);
const UserDTO = require(`${config.path.dtos}/UserDTO`);

module.exports = new class AdminUserController {

    async getAllUsers (req, res) {
        res.status(StatusCodes.Ok).json({data : await UserService.getAllUsers()});
    };

    async getUser (req, res) {
        res.status(StatusCodes.Ok).json({data : await UserService.getUser(req.params.userId)});
    };

    async createUser (req, res) {
        const userBody = UserDTO.create(req.body);
        res.status(StatusCodes.Ok).json({data : await UserService.createUser(userBody)});
    };

    async updateUser (req, res) {
        const userBody = UserDTO.update(req.body);
        res.status(StatusCodes.Ok).json({data : await UserService.updateUser(userBody, req.params.userId)});
    };

    async deleteUser (req, res) {
        res.status(StatusCodes.Ok).json({data : await UserService.deleteUser(req.params.userId)});
    };

};