const { StatusCodes } = require("http-status-codes");

module.exports = new class HomeController {

    index(req, res){
        res.status(StatusCodes.OK).json({message : 'home controller index'});
    };
    
};