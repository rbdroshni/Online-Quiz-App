const Quiz=require('../quizModel/quiz.model')

//create and save a new Note

exports.create=(req,res)=>{
    //validate a request
    if(!req.body.content){
        return res.status(400).send({
            message:"Quiz content can not be empty"|| "Untitled Quiz"
        });
    }

    //Create a Quiz

    const quiz=new Quiz({
        title:req.body.title,
        type:req.body.type,
        options:req.body.options,
        checkbox:req.body.checkbox,
    
    });

    //Save quiz in the database

    quiz.save()
    .then(data=>{
        console.log("data >>>>>>>>>>>", data)
        res.status(200).send(data);
    }).catch(err=>{
        console.log("err ", err)
        res.status(500).send({
           message:err.message|| "Some error occur while creating quiz"
        })
    })

};

//Retrieve and return all quiz from database.
exports.findAll=(req,res)=>{
    Quiz.find()
    .then(quizes=>{
         res.send(quizes);
        }).catch(err=>{
            res.send(500).send({
                message:err.message||"some error occur while retreiving quizes"
            })
        })
};

//Find a single quiz with a quizId

exports.findOne=(req,res)=>{
    Quiz.findById(req.params.quizId)
    .then(quiz=>{
        if(!quiz){
            return res.status(404).send({
                message:"Quiz not found with id"+ req.params.quizId
            });
        }
        res.send(quiz);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Quiz not found with Id"+req.params.quizId
            });
        }

        return res.status(500).send({
           message:"Error retrieving quiz with id"+ req.params.quizId
        })
    })

};

//Update a quiz identified by the quizId in the request

exports.update=(req,res)=>{
//Validate request
if(!req.body.content){
    return res.status(400).send({
        message:"Note content can not be empty"
    });
}

//find quiz and update it with the request body

Quiz.findByIdAndUpdate(req.params.quizId,{
    title:req.body.title||"Untitled quiz",
    type:req.body.type,
    options:req.body.options,
    checkbox:req.body.checkbox
},{new:true})
.then(quiz=>{
    if(!quiz){
        return res.status(404).send({
            message:"Quiz not found with id " + req.params.quizId
        })
    }

    res.send(quiz);
}).catch(err=>{
if(err.kind==='ObjectId'){
    return res.status(404).send({
        message:"Quiz not found with id" + req.param.quizId
   })
}

    return res.status(500).send({
       message:"error updating quiz with id" + req.params.quizId
    });
 });
};

//Delete a quiz with the specified quizId in the request

exports.delete=(req,res)=>{
    Quiz.findByIdAndRemove(req.params.quizId)
    .then(quiz=>{
        if(!quiz){
            return res.status(404).send({
               message:"Quiz not found with Id" +req.params.quizId 
            });
        }
        res.send({messge:"Quiz deleted successfully "});
    }).catch(err=>{
        if(err.kind==='ObjectId'||err.name==='Not Found'){
            return res.status(404).send({
                message:"Note not found with id" + req.params.quizId
            });
        }

        return res.status(500).send({
            message:"Could not delete quiz with Id" + req.params.quizId
        })
    })

}
