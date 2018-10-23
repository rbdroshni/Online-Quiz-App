module.exports=(app)=>{
    const quizes=require('../controllers/quiz.controller')


      // app.use(function(req, res, next) { //allow cross origin requests
    //     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    //     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.header("Access-Control-Allow-Credentials", true);
    //     next();
    // });
    
    // Create a new quiz
    app.post('/quizes',quizes.create);

    //Retrieve all Notes

    app.get('/quizes',quizes.findAll);

    //Update a quiz with quizId

    app.put('/quizes/:quizId',quizes.update);

    //Delete a Note with noteId
    app.delete('/quizes/:quizId',quizes.delete)

}