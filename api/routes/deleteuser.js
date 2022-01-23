const router = require('express').Router();
const Userinfo = require('../models/userinfo');

// delete user-info

router.delete('/:id', async (req ,res)=>{
    if(req.body.userId === req.params.id){
        try{
            Userinfo.findByIdAndDelete(req.params.id)
            res.status(200).json('info deleted')
            
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("deleting only for the sync'd account")
    }
})

module.exports = router;
