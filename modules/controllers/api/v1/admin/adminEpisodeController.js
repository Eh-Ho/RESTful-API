const Controller  = require(`${config.path.controller}`);

module.exports = new class AdminEpisodeController extends Controller {

    async index (req, res) {
        try{
            let episodes = await this.model.Episode.find({});
            res.json(episodes);
        }catch (err) {
            res.send(err);
        };
        
    };

    async store (req, res) {
        try{
            let newEpisode = new this.model.Episode(req.body);
            res.json(await newEpisode.save());
        }catch (err) {
            res.send(err);
        };
        
    };

    async single (req, res) {
        try{
            let episode = await this.model.Episode.findById(req.params.id);
            res.json(episode);
        }catch (err) {
            res.send(err);
        };
    };

    async update () {
        try{
            res.json(await this.model.Episode.findByIdAndUpdate(req.params.id, req.body, {new : true}));
        }catch (err) {
            res.send(err);
        };
    }

    async destroy () {
        try{
            res.json(await this.model.Episode.findByIdAndDelete(req.body.id))
        }catch (err) {
            res.send(err);
        };
    };

};