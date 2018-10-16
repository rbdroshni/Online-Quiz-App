const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const dbConfig=require('./config/database.config.js')


const mongoose=require('mongoose');
mongoose.Promise = global.Promise;



app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())

app.get('/',(req,res)=>{
res.json({"message":"WElcome to my online quiz app"});
})

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})





