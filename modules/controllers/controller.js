const Course = require(`${config.path.models}/Course`);
const User = require(`${config.path.models}/User`);
const Comment = require(`${config.path.models}/Comment`);
const Episode = require(`${config.path.models}/Episode`);
const {query} = require('express-validator');


module.exports = class Controller{
    constructor () {
        this.model = {Course, User, Comment, Episode};
    };
};