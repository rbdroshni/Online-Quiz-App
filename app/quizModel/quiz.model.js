const mongoose=require('mongoose');

const QuizSchema=mongoose.Schema({
    title:String,
    type:String,
    options:String,
    checkbox:Boolean   
})

module.exports=mongoose.model('Quiz',QuizSchema);