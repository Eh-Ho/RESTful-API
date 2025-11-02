const express = require('express');
const webRouter = express.Router();



webRouter.route('/').get((req,res)=>{
    res.send('web router');
});


module.exports = webRouter;