

module.exports = new class HomeController {
    index(req, res){
        res.json({message: 'HomeController index method'});
    }

    store(req, res){
        res.json({message: 'HomeController store method'});
    }


    update(req, res){
        res.json({message: 'HomeController update method'});
    }


    destroy(req, res){
        res.json({message: 'HomeController destroy method'});
    }
};