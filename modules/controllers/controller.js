const Course = require(`${config.path.models}/Course`);
const User = require(`${config.path.models}/User`);
const Comment = require(`${config.path.models}/Comment`);
const Episode = require(`${config.path.models}/Episode`);

module.exports = class Controller{
    constructor(){
        this.courseModel = Course;
        this.userModel = User;
        this.commentModel = Comment;
        this.episodeModel = Episode;
    }
};