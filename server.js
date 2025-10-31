const express = require('express');
const bodyParser = require('body-parser');
const webRouter = require('./modules/routes/web')
const APIRouter = require('./modules/routes/api/index')
const mongoose = require('mongoose');
global.config = require('./modules/config');

//connecting database
const dbName = 'API_project';
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
mongoose.Promise = global.Promise;





// express app
const app = express();




// middlewares and routers
app.use(bodyParser.urlencoded({extended  : false}));

app.use(bodyParser.json({type : 'application/json'}));

// routers
app.use('/', webRouter);
app.use('/api', APIRouter);


//server running
app.listen(config.port, ()=>{
    console.log(`server running on port ${config.port}`);
});
