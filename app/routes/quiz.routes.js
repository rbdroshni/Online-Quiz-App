module.exports=(app)=>{
    const quizes=require('../controlers/quiz.controller.js')

    // Create a new quiz
    app.post('/quizes',quizes.create);

    //Retrieve all Notes

    app.get('/quizes',quizes.findAll);

    //Update a quiz with quizId

    app.put('/quizes/:quizId',quies.update);

    //Delete a Note with noteId
    app.delete('/quizes/:quizId',quizes.delete)

}