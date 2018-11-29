const mongoose=require('mongoose');

const QuizSchema=mongoose.Schema({
    id:Number,
    title:String,
    type:String,
    optionsArray:[{
    optText:String,
    isCorrect:Boolean 
    }]    
})

module.exports=mongoose.model('Quiz',QuizSchema);