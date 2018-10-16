const mongoose=require('mongoose');

const QuizSchema=mongoose.Schema({
    key:number,
    title:string,
    type:string,
    options:string,
    checkbox:boolean   
})

module.exports=mongoose.model('quiz',QuizSchema);