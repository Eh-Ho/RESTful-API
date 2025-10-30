const express = require('express');
const router = express.Router();


router.route('/courses').get((req,res)=>{
    res.json({
        name : 'test'
    })
});



module.exports = router;
