const mongoose=require('mongoose');

const QuizSchema=mongoose.Schema({
    title:String,
    type:String,
    optionsArray:[{
    optText:String,
    isCorrect:Boolean 
    } 
]       
})

module.exports=mongoose.model('Quiz',QuizSchema);