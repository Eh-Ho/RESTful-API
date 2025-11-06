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

    async store (req, res) {
        try{
            let newEpisode = new this.model.Episode(req.body);
            await newEpisode.save();
            await this.model.Course.findByIDAndUpdate(req.params.id, {$addToSet : {episodes : newEpisode._id}});
            res.status(200).json(newEpisode);

        }catch (err) {
            res.status(500).send(err);
        };
        
    };

    async single (req, res) {
        try{
            let episode = await this.model.Episode.findById(req.params.id);
            res.status(200).json(episode);
        }catch (err) {
            res.status(500).send(err);
        };
    };

    async update () {
        try{
            res.json(await this.model.Episode.findByIdAndUpdate(req.params.id, req.body, {new : true}));
        }catch (err) {
            res.status(200).status(500).send(err);
        };
    };

    async destroy () {
        try{
            res.json(await this.model.Episode.findByIdAndDelete(req.body.id))
        }catch (err) {
            res.status(200).status(500).send(err);
        };
    };

};