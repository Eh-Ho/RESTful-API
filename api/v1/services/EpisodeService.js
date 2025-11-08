const pathResolver = require('../../utilities/pathResolver');
const BaseService = require(`${pathResolver('v1').services}/BaseService`);

module.exports = new class EpisodeService extends BaseService {
    
    async createEpisode (episodeBody, courseId) {
        try{
            let newEpisode = new this.model.Episode(episodeBody);
            await newEpisode.save();
            await this.model.Course.findByIdAndUpdate(courseId, {$addToSet : {episodes : newEpisode._id}}, {new : true});
            return newEpisode;

        }catch (err) {
            res.status(500).send(err);
        };
    };

    async updateEpisode (episodeBody, episodeId) {
        try{
            let episode = await this.model.Episode.findByIdAndUpdate(episodeId, episodeBody, {new : true});
            return episode;

        }catch (err) {
            return err;
        };
    };

    async deleteEpisode (episodeId) {
        try{
            let episode = await this.model.Episode.findById(episodeId);
            await this.model.Episode.findByIdAndDelete(episodeId);
            let course = await this.model.Course.findByIdAndUpdate(episode.course, {$pull : {episodes : episodeId}}, {new : true});
            return course

        }catch (err) {
            return err;
        };
    };

    async getEpisode (episodeId) {
        try{
            let episode = await this.model.Episode.findById(episodeId);
            return episode;

        }catch (err) {
            return err;
        };
    };

    async getCourseEpisode (courseId) {
        try{
            let episodes = await this.model.Course.findById(courseId).populate('episodes');
            return episodes
        }catch (err) {
            return err;
        };
    }

    async getAllEpisodes () {
        try{
            let episodes = await this.model.Episode.find({});
            return episodes;
        }catch (err) {
            return err;
        };
    };

}