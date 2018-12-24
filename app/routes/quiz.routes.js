module.exports=(app)=>{    
    const quizes=require('../controllers/quiz.controller')
    app.post('/quizes',quizes.create);
    app.get('/quizes',quizes.findAll);
    app.post('/quizesupdate',quizes.quizUpdate);
    app.get('/quizes/:quizId',quizes.findOne);
    app.delete('/quizes/:quizId',quizes.delete);
}