const express = require('express');
global.config = require('./modules/config');
const bodyParser = require('body-parser');
const webRouter = require('./modules/routes/web');
const APIRouter = require('./modules/routes/api/index');
const mongoose = require('mongoose');

//connecting database
const mongoURI = `mongodb://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.databaseName}?authSource=${config.database.authSource}`;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));




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
