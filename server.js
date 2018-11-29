const express=require('express');
const bodyParser=require('body-parser');
const app=express();
// const cors=require('cors');

const dbConfig=require('./config/database.config.js')


const mongoose=require('mongoose');
mongoose.Promise = global.Promise;

 app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });
    

// app.use(cors);

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())

app.get('/',(req,res) => {
res.json({"message":"Welcome to my online quiz app"});
})


require('./app/routes/quiz.routes')(app);


app.listen(3000,() => {
    console.log("Server is listening on port 3000");
})


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});







