const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const EpisodeService = require('../../services/EpisodeService');

module.exports = new class AdminEpisodeController  {

    async getAllEpisodes (req, res) {
        res.status(StatusCodes.OK).json(await EpisodeService.getAllEpisodes());       
    };

    async getCourseEpisodes (req, res) {
        res.status(StatusCodes.OK).json(await EpisodeService.getCourseEpisode(req.params.courseId));
    }

    async createEpisode (req, res) {
        res.status(StatusCodes.OK).json(await EpisodeService.createEpisode({...req.body, course : req.params.courseId}, req.params.courseId))
    };

    async getEpisode (req, res) {
        res.status(StatusCodes.OK).json(await EpisodeService.getEpisode(req.params.episodeId));
    };

    async updateEpisode (req, res) {
        res.status(StatusCodes.OK).json(await EpisodeService.updateEpisode(req.body, req.params.episodeId));
    };

    async deleteEpisode (req, res) {
        res.status(StatusCodes.OK).json(await EpisodeService.deleteEpisode(req.params.episodeId));

    };

};