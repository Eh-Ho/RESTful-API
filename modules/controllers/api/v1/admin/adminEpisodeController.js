const Controller  = require(`${config.path.controller}`);

module.exports = new class AdminEpisodeController extends Controller {

    async index (req, res) {
        try{
            let episodes = await this.model.Episode.find({});
            res.json(episodes);
        }catch (err) {
            res.send(err);
        }
        
    };

    async store () {

    };

    async single () {

    };

    async update () {
        
    }

    async destroy () {

    };

};