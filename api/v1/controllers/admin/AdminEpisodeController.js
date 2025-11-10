const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const pathResolver = require('../../../utilities/pathResolver');
const EpisodeService = require(`${pathResolver('v1').services}/EpisodeService`);
const EpisodeDTO = require(`${pathResolver('v1').dtos}/EpisodeDTO`);

module.exports = new class AdminEpisodeController  {

    async getAllEpisodes (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.getAllEpisodes()});       
    };

    async getCourseEpisodes (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.getCourseEpisode(req.params.courseId)});
    }

    async createEpisode (req, res) {
        const episodeBody = EpisodeDTO.create(req.body, req.params);
        res.status(StatusCodes.OK).json({data : await EpisodeService.createEpisode(episodeBody, req.params.courseId)})
    };

    async getEpisode (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.getEpisode(req.params.episodeId)});
    };

    async updateEpisode (req, res) {
        const episodeBody = EpisodeDTO.create(req.body);
        res.status(StatusCodes.OK).json({data : await EpisodeService.updateEpisode(episodeBody, req.params.episodeId)});
    };

    async deleteEpisode (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.deleteEpisode(req.params.episodeId)});

    };

};