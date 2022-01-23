const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/userinfo');
const updateRoute = require('./routes/updateInfo');
const deleteInfo = require('./routes/deleteuser');
const getUser = require('./routes/getUser');
app.use(cors());


const path = require('path');
const db = process.env.mongoURI;
const port =process.env.PORT;
app.use(express.json());
mongoose.connect(db, { useNewUrlParser : true , useUnifiedTopology : true })
.then(console.log('connected to mongodb'))
.catch(err=>{
    console.log(err)
})

app.use('/api/users', authRoute);
app.use('/api/users', updateRoute)
app.use('/api/users' ,deleteInfo )
app.use('/api/users' ,getUser )

// handle production issues //
if(process.env.NODE_ENV=== "production"){
    //static folder
    app.use(express.static(__dirname + '/public/'))    
    //handle SPA.
    app.get(/.*/,(req,res)=>{
        res.sendFile(__dirname + '/public/index.html')
    });
}


app.listen(port, ()=>{
    console.log(`app running on port ${port}`,)
});
  