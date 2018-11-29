module.exports=(app)=>{
    
    const quizes=require('../controllers/quiz.controller')

   

    // Create a new quiz
    app.post('/quizes',quizes.create);

    //Retrieve all quizes

    app.get('/quizes',quizes.findAll);

    //Retrieve one quiz with quizId

    app.get('/quizes/:quizId',quizes.findOne);

    //Update a quiz with quizId

    app.put('/quizes/:quizId',quizes.update);

    //Delete a quiz with quizId
    app.delete('/quizes/:quizId',quizes.delete);

    //Delete an options with optionsId

    // app.delete('/quizes/:quizId/options/:optionsId',quizes.delete);
}