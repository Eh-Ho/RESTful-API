const express = require('express');
const webRouter = express.Router();



webRouter.route('/').get((req,res)=>{
    res.json({content:'test'})
})


module.exports = webRouter;