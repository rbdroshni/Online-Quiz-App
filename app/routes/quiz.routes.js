module.exports=(app)=>{
    const quizes=require('../controllers/quiz.controller')

    // Create a new quiz
    app.post('/quizes',quizes.create);

    //Retrieve all Notes

    app.get('/quizes',quizes.findAll);

    //Update a quiz with quizId

    app.put('/quizes/:quizId',quizes.update);

    //Delete a Note with noteId
    app.delete('/quizes/:quizId',quizes.delete)

}