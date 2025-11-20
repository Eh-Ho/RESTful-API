const mongoose  = require('mongoose');
const AppError = require(`${config.path.middlewares}/errorHandler`);
const { StatusCodes } = require('http-status-codes');
const BaseService = require(`${config.path.services}/BaseService`);

module.exports = new class EpisodeService extends BaseService {
    
    async createEpisode (episodeBody, courseId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try{
            let newEpisode = new this.model.Episode(episodeBody);
            await newEpisode.save({session});
            await this.model.Course.findByIdAndUpdate(courseId, {$addToSet : {episodes : newEpisode._id}}, {new : true, session});
            await session.commitTransaction();
            return newEpisode;
        }catch (err) {
            await session.abortTransaction();
            throw err;
        }finally{
            session.endSession();
        };
    };

    async updateEpisode (episodeBody, episodeId) {
        try{
            let episode = await this.model.Episode.findByIdAndUpdate(episodeId, episodeBody, {new : true});
            if(!episode) throw new AppError('Episode Not Found', StatusCodes.NOT_FOUND)
            return episode;
        }catch (err) {
            throw err;
        };
    };

    async deleteEpisode (episodeId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        
        try{
            let episode = await this.model.Episode.findById(episodeId, null, {session});
            if(!episode) throw new AppError('Episode Not Found', StatusCodes.NOT_FOUND);

            await this.model.Episode.findByIdAndDelete(episodeId, {session});
            let course = await this.model.Course.findByIdAndUpdate(episode.course, {$pull : {episodes : episodeId}}, {new : true, session});
            await session.commitTransaction();
            return course
        }catch (err) {
            await session.abortTransaction();
            throw err;
        }finally{
            session.endSession();
        };
    };

    async getEpisode (episodeId) {
        try{
            let episode = await this.model.Episode.findById(episodeId);
            if(!episode) throw new AppError('Episode Not Found', StatusCodes.NOT_FOUND);
            return episode;

        }catch (err) {
            throw err;
        };
    };

    async getCourseEpisodes (courseId) {
        try{
            let course = await this.model.Course.findById(courseId).populate('episodes');
            if(!course) throw new AppError('Course Not Found', StatusCodes.NOT_FOUND);
            return course.episodes;
        }catch (err) {
            throw err;
        };
    }

    async getAllEpisodes () {
        try{
            let episodes = await this.model.Episode.find({});
            return episodes;
        }catch (err) {
            throw err;
        };
    };

}