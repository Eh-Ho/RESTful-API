const express = require('express');
const webRouter = express.Router();



webRouter.route('/').get((req,res)=>{
    res.json({message:'web router'})
});


module.exports = webRouter;