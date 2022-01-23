// get user
const router = require('express').Router();
const Userinfo = require('../models/userinfo');


router.get('/', async (req ,res)=>{
            try{
                // const getData = await Userinfo.findById(req.params.id)
                const getData = await Userinfo.find()

                res.status(200).json(getData)

            }catch(err){
                console.log(err)
            }
})


module.exports = router;