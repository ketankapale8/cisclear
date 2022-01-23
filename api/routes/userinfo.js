const router = require('express').Router();
const Userinfo = require('../models/userinfo');

// Registering new user's information. 
router.post('/register', async (req , res)=>{
    try{
        const newUser = new Userinfo(
            req.body
            // firstname : req.body.firstname,
            // lastname : req.body.lastname,
            // middlename : req.body.middlename,
            // suffixid: req.body.suffixid,
            // employeetype : req.body.employeetype
        );
        await newUser.save();
        res.status(200).json({'userupdated':newUser})
    }catch(err){
        res.status(500).json(err)
    }
})





module.exports = router;