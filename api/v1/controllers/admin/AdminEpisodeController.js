const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const EpisodeService = require(`${config.path.services}/EpisodeService`);
const EpisodeDTO = require(`${config.path.dtos}/EpisodeDTO`);

module.exports = new class AdminEpisodeController  {

    async getAllEpisodes (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.getAllEpisodes()});       
    };

    async getCourseEpisodes (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.getCourseEpisodes(req.params.courseId)});
    }

    async createEpisode (req, res) {
        const episodeBody = EpisodeDTO.create(req.body, req.params);
        res.status(StatusCodes.OK).json({data : await EpisodeService.createEpisode(episodeBody, req.params.courseId)})
    };

    async getEpisode (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.getEpisode(req.params.episodeId)});
    };

    async updateEpisode (req, res) {
        const episodeBody = EpisodeDTO.update(req.body);
        res.status(StatusCodes.OK).json({data : await EpisodeService.updateEpisode(episodeBody, req.params.episodeId)});
    };

    async deleteEpisode (req, res) {
        res.status(StatusCodes.OK).json({data : await EpisodeService.deleteEpisode(req.params.episodeId)});

    };

};