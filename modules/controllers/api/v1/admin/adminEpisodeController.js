const Controller  = require(`${config.path.controller}`);

module.exports = new class AdminEpisodeController extends Controller {

    async index (req, res) {
        try{
            let episodes = await this.model.Episode.find({});
            res.status(200).json(episodes);

        }catch (err) {
            res.status(500).send(err);
        };
        
    };

    async courseIndex (req, res) {
        try{
            let episodes = await this.model.Course.findById(req.params.courseId).populate('episodes');
            res.status(200).json(episodes);

        }catch (err) {
            res.status(500).send(err);
        }
    }

    async store (req, res) {
        try{
            let newEpisode = new this.model.Episode({...req.body, course : req.params.courseId});
            await newEpisode.save();
            await this.model.Course.findByIdAndUpdate(req.params.courseId, {$addToSet : {episodes : newEpisode._id}}, {new : true});
            res.status(200).json(newEpisode);

        }catch (err) {
            res.status(500).send(err);
        };
        
    };

    async single (req, res) {
        try{
            let episode = await this.model.Episode.findById(req.params.episodeId);
            res.status(200).json(episode);

        }catch (err) {
            res.status(500).send(err);
        };
    };

    async update (req, res) {
        try{
            res.json(await this.model.Episode.findByIdAndUpdate(req.params.episodeId, req.body, {new : true}));

        }catch (err) {
            res.status(500).send(err);
        };
    };

    async destroy (req, res) {
        try{
            let episode = await this.model.Episode.findById(req.params.episodeId);
            await this.model.Episode.findByIdAndDelete(req.params.episodeId);
            res.status(200).json(await this.model.Course.findByIdAndUpdate(episode.course, {$pull : {episodes : req.params.episodeId}}, {new : true}));

        }catch (err) {
            res.status(500).send(err);
        };
    };

};