const AuthService = require(`${config.path.services}/AuthService`);
const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const AuthDTO = require(`${config.path.dtos}/AuthDTO`);

module.exports = new class AuthController {

    async register (req, res) {
        const userInfo = AuthDTO.register(req.body);
        res.status(StatusCodes.OK).json({data : await AuthService.register(userInfo)});
    };


    async signIn (req, res) {
        const userInfo = AuthDTO.sinIn(req.body);
        res.status(StatusCodes.OK).json({data : await AuthService.signIn(userInfo)});
    };


    async signOut (req, res) {
        const userId = req.user?.userId;
        res.status(StatusCodes.OK).json({data : await AuthService.signOut(userId)});
    };

};