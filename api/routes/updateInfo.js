const router = require('express').Router();
const Userinfo = require('../models/userinfo');


// update user-info
router.put('/:id', async (req ,res)=>{
    if(req.body.userId === req.params.id){
        try{
            const updatedData = await Userinfo.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true})
            res.status(200).json({'updatedUserData':updatedData})
            
        }catch(err){
            res.status()
        }
    }else{
        res.status(401).json("update for the logged-in account")
    }
})




module.exports = router;