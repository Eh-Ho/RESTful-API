

module.exports = new class HomeController {
    index(req, res){
        res.send('HomeController index method');
    }

    store(req, res){
        res.send('HomeController store method');
    }


    update(req, res){
        res.send('HomeController update method');
    }


    destroy(req, res){
        res.send('HomeController destroy method');
    }
};