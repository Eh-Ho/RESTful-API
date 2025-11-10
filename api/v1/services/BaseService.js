const Course = require(`${config.path.models}/Course`);
const User = require(`${config.path.models}/User`);
const Comment = require(`${config.path.models}/Comment`);
const Episode = require(`${config.path.models}/Episode`);

module.exports = class BaseService {
    constructor () {
        this.model = {Course, User, Comment, Episode};
    };
}