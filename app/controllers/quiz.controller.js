const Quiz = require('../quizModel/quiz.model')


//create and save a new Note

exports.create = (req, res) => {
    console.log("==============", req.body)
    //validate a request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Quiz content can not be empty" || "Untitled Quiz"
        });
    }

    //Create a Quiz

    const quiz = new Quiz({
        id: req.body._id,
        title: req.body.title,
        type: req.body.type,
        optionsArray: req.body.optionsArray,
        created_at:new Date()
    });

    //Save quiz in the database

    quiz.save()
        .then(data => {
            console.log("data >>>>>>>>>>>", data)
            res.status(200).send(data);
        }).catch(err => {
            console.log("err ", err)
            res.status(500).send({
                message: err.message || "Some error occur while creating quiz"
            })
        })

};

//Retrieve and return all quiz from database.

exports.findAll = (req, res) => {

    Quiz.find()
        .then(quizes => {
            res.send(quizes);
            console.log(quizes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while retreiving quizes"
            })
        })
};


//Find a single quiz with a quizId

exports.findOne = (req, res) => {
    Quiz.findById(req.params.quizId)
        .then(quiz => {

            if (!quiz) {
                return res.status(404).send({
                    message: "Quiz not found with id" + req.params.quizId
                });
            }
            else {
                res.send(quiz);
                console.log("getting one quiz", quiz);
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Quiz not found with Id" + req.params.quizId
                });
            }

            return res.status(500).send({
                message: "Error retrieving quiz with id" + req.params.quizId
            })
        })

};



exports.update=(req,res)=>{
    //Validate request
    if(!req.params.quizId){
        return res.status(400).send({
            message:"Note content can not be empty"
        });
    }
    
    //find quiz and update it with the request body
    
    Quiz.findByIdAndUpdate(req.params.quizId,{
         title:req.body.title||"Untitled quiz",
        type:req.body.type,
        optionsArray:req.body.optionsArray
       
    }
    
    ,{new:true})
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
            message:"Quiz not found with id" + req.params.quizId
       })
    }
    
        return res.status(500).send({
           message:"error updating quiz with id" + req.params.quizId
        });
     });
    };


//Delete a quiz with the specified quizId in the request

exports.delete = (req, res) => {
    Quiz.findByIdAndRemove(req.params.quizId)
        .then(quiz => {
            if (!quiz) {
                console.log("delete backend is working");
                return res.status(404).send({
                    message: "Quiz not found with Id" + req.params.quizId
                });
            }
            res.send({ message: "Quiz deleted successfully " });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'Not Found') {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.quizId
                });
            }

            return res.status(500).send({
                message: "Could not delete quiz with Id" + req.params.quizId
            })
        })

}

//Delete an options with the specified optionsId in the request


