const path = require('path');

module.exports = {
    port : 8000,
    database :'API_project',
    path:{
        controllers:{
            api : path.resolve('./modules/controllers/api')
        },
        controller : path.resolve('./modules/controllers/controller.js'),
        models : path.resolve('./modules/models/')
    }
};