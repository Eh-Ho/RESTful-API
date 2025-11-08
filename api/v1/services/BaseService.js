const pathResolver = require('../../utilities/pathResolver');

const Course = require(`${pathResolver('v1').models}/Course`);
const User = require(`${pathResolver('v1').models}/User`);
const Comment = require(`${pathResolver('v1').models}/Comment`);
const Episode = require(`${pathResolver('v1').models}/Episode`);

module.exports = class BaseService {
    constructor () {
        this.model = {Course, User, Comment, Episode};
    };
}