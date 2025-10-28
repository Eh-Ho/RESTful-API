const express = require('express');
const bodyParser = require('body-parser');
global.config = require('./modules/config');


const app = express();

app.listen(config.port, ()=>{
    console.log(`server running on port ${config.port}`);
});
